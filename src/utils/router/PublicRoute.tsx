import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// import { AppContext } from '@context/app/AppContext';
import { AuthContext } from '@context/auth/AuthContext';
import { LogContext } from '@context/log/LogContext';

const PublicRoute = () => {
  //   const { updateActiveAppData, platformTiers, getPlatformData } =
  //     useContext(AppContext);
  const { accessToken } = useContext(AuthContext);
  const { setPage } = useContext(LogContext);

  useEffect(() => {
    setPage('public');
    if (platformTiers.length <= 0) getPlatformData();
    updateActiveAppData({
      appId: nexiousAppId,
      appName: nexiousName,
      logo: nexiousLogo,
      media: nexiousMedia,
      themeList: nexiousThemeList,
      menu: accessToken ? nexiousAuthMenu : nexiousMenu,
    });
  }, [accessToken]);

  return <Outlet />;
};
export default PublicRoute;
