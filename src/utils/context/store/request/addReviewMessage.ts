import { A_STORE } from "@utils/actions/StoreActions";
import { axiosAuth } from "@utils/axios/axiosAuth";
import { isDev } from "@utils/config";
import type { StoreDispatchProps } from "store-context";

export const addReviewMessage = async ({ messageId, data: d, merch, messages, dispatch }: StoreDispatchProps) => {
  if (!messages) throw Error("messages param is required");
  if (!merch) throw Error("merch param is required");
  try {
    const { data } = await axiosAuth.post(`store/message/${messageId}`, d);

    merch.reviews = merch.reviews.map((review) => {
      if (review.messageId === messageId) return { ...review, replies: [...review.replies, data.message] };
      return review;
    });

    dispatch({ type: A_STORE.SET_MERCH, payload: merch });
  } catch (error) {
    if (isDev) console.log("error", error);
  }
};
