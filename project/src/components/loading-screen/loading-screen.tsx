const LoadingScreen = () => (
  <div style={{width: '100%', height: '100vh', display: 'flex', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', zIndex: '999'}}>
    <img style={{margin: 'auto'}} src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt="" />
  </div>
);

export default LoadingScreen;
