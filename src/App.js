function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top blue-bg">
          <div >
            <a className="index_logo" href="#">
              <img src="static/picture/store_logo.png" />
            </a>
          </div>
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand index_logo2" href="#">
                <img src="static/picture/store_logo.png" />
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#top">首页</a>
                </li>
                <li>
                  <a href="#section2">俱乐部</a>
                </li>
                <li>
                  <a href="#section3">锦标赛</a>
                </li>
                <li>
                  <a href="#section4">专业统计</a>
                </li>
                <li>
                  <a href="#section7">联系我们</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="section1" className="region region-1 align-center blue-bg">
          <div className="container">
            <h1 className="wow zoomIn">德扑圈-HHpoker</h1>
            <div className="wow zoomIn">
              <p style={{fontSize: '30px'}}>
                <span style={{color: '#d9ff4d', fontSize: '24px'}}>
                  苹果私通Letstalk：
                  <a
                    href="https://apps.apple.com/cn/app/letstalk-im/id1270059337"
                    target="_blank"
                    className="btn-success"
                  >
                    点击下载
                  </a>
                </span>
              </p>
              <p style={{fontSize: '30px'}}>
                <span style={{color: '#00bbff', fontSize: '24px'}}>
                  安卓私通Letstalk：
                  <a
                    href="https://yunpan.360.cn/surl_yvqTT3Smkhp"
                    target="_blank"
                    className="btn-primary"
                  >
                    点击下载
                  </a>
                </span>
              </p>
              <p style={{fontSize: '24px'}}>下载APP，客服私通号：t228164</p>
            </div>
            <img
              src="static/picture/p_home1.png"
              className="wow fadeInUp img-responsive center"
              data-wow-delay=".5s"
            />
          </div>
        </section>
        <section id="section2" className="region region-2 align-center back1">
          <div className="container" style={{position: 'relative'}}>
            <div >
              <h1 className="scrollflow -pop -opacity">德扑圈俱乐部</h1>
              <div
                className="scrollflow -slide-top -opacity desc"
                style={{color: '#fff', fontSize: '25px'}}
              >
                <p className="tagline">
                  一人打牌太闷太无聊，想和更多朋友交流切磋
                  <br />
                  加入您身边的俱乐部，与各路豪杰一同交流技艺
                </p>
                <p>联系客服私通：t228164</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="section3"
          className="region region-3 dark-grey-bg centerVert"
        >
          <div className="container">
            <div className="col col-md-5 col-left detail">
              <h1 className="scrollflow -slide-bottom -opacity">锦标赛</h1>
              <div className="scrollflow -slide-top -opacity desc">
                <p style={{fontSize: '20px'}}>
                  赛事奖金太少？赛制单调乏味？
                  <br />
                  快加入德扑圈锦标赛 超高奖励的大型赛事 多种类型的赛事设计
                  与好友一同在千军万马中脱颖而出
                </p>
              </div>
            </div>
            <div className="col col-md-7 col-right">
              <img
                src="static/picture/p_home6.png"
                className="scrollflow -pop -opacity img-responsive center"
              />
            </div>
          </div>
        </section>
        <section
          id="section4"
          className="region region-4 light-grey-bg centerVert back2"
        >
          <div className="container">
            <div
              className="scrollflow -slide-right -opacity col col-md-7 col-md-push-5 detail"
              style={{height: 300}}
            >
              <h1>德扑圈专业统计</h1>
              <div className="desc" style={{color: '#fff', fontSize: '20px'}}>
                <p>帮你洞悉对手，助您全面提升牌技</p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="section5"
          className="region region-5 blue-bg centerVert back3"
        >
          <div className="container">
            <div className="col col-md-5 col-left detail" style={{height: 250}}>
              <h1 className="scrollflow -slide-right -opacity">
                德扑圈以德会友
              </h1>
              <div
                className="scrollflow -slide-left -opacity desc"
                style={{color: '#111', fontSize: '20px'}}
              >
                <p>
                  同城、异地、朋友、家人
                  <br />
                  约局神器，想约就约.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="region blue-bg align-center" id="section7">
          <div className="container wow zoomIn">
            <h1>联系我们</h1>
            <img
              src="static/picture/erweima.jpg"
              style={{width: 250}}
              className="wow fadeIn img-responsive center"
              data-wow-delay=".5s"
            />
            <p style={{fontSize: '25px', color: '#fff', marginBottom: 20}}>
              客服私通号：t228164
            </p>
          </div>
        </footer>
        <div className="weixinhaofz">
          <h1 className="iconfont icon-PDF">
            <p></p>
          </h1>
          <h2 style={{padding: 0, margin: 0}}>
            <p style={{margin: 0}}>客服私通号：</p>
            <span id="article" className="keys" name="stxlwx">
              t228164
            </span>
          </h2>
          <button id="copy">点击复制私通号</button>
        </div>
      </div>
    </>
  );
}

export default App;
