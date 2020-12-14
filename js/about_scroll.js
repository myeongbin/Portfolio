console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');

        var _this = this;
        var _scrollTop = 0;

        var _winW = null;
        var _winH = null;

        var _changeH = null;
        var _changeMax = null;

        function init() {
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            // 브라우저 창 셀렉터.
            _this.$win = $(window);

            // 스크롤 애니메이션을 위한 셀렉터.
            _this.$scroll = $('html, body');

            _this.$container = $('#container');

            // 메뉴 셀렉터.
            _this.$menuBg = _this.$container.find('.menu-bg');
            _this.$menuBtn = _this.$menuBg.find('.menu-btn');
            _this.$menuBtnLine = _this.$menuBtn.find('span');

            _this.$contact = _this.$container.find('.contact');
            _this.$contactEl = _this.$contact.find('.contact-el ');

            _this.$pageIndex = _this.$container.find('.page-index');
            
            _this.$subTitle = _this.$container.find('.sub-title');

            _this.$gridBox = _this.$container.find('.grid-box');
            _this.$illustVideo = _this.$container.find('.desc-illust');
            
            _this.$sectionWrap = _this.$container.find('.section-wrap');
            _this.$prevSec = _this.$sectionWrap.find('.about-main');
            _this.$nextSec = _this.$sectionWrap.find('.introduce');


            // intro 셀렉터.
            _this.$intro = _this.$container.find('.intro');
            _this.$introTitle = _this.$intro.find('.intro-title');
            _this.$titleEm = _this.$introTitle.find('.em-word');

        }

        // 초기 변수 값 지정.
        function setting() {
        }

        // 이벤트 핸들러
        function addEvent() {
            _this.$win.on('scroll', onScrollWin).trigger('scroll');
            // _this.$menuBg.on('click', onClickMenu);
        }

        function reset() {

        }

        // 스크롤 이벤트 함수
        function onScrollWin(e) {
            console.log('scroll');
            _scrollTop = _this.$win.scrollTop(); // 스크롤 Y 좌표.
            // console.log(_scrollTop);

            scrollActive();
        }

        // 스크롤 시 메뉴 활성화 변경 기능.
        function scrollActive(){

            var start = _this.$nextSec.offset().top,
                contentTop = _this.$subTitle.offset().top;

            _this.$menuBg.removeClass('active');
            _this.$menuBtnLine.removeClass('active');
            _this.$contactEl.removeClass('active');

            if(_scrollTop >= start){
                _this.$container.css({'background-color' : '#000000', 'transition' : 'all .7s ease'});
                // console.log('change');
                _this.$menuBg.addClass('active');
                _this.$menuBtnLine.addClass('active');
                _this.$contactEl.addClass('active');

                if( _scrollTop >= contentTop){
                    _this.$illustVideo.css({'opacity' : '1', 'transition' : 'all 0.7s ease'});
                }else{
                    _this.$illustVideo.css({'opacity' : '0'});
                }

            }else{
                _this.$container.css({'background-color' : 'var(--main-bg-color)'});
                // console.log('change back');
                _this.$menuBg.removeClass('active');
                _this.$menuBtnLine.removeClass('active');
                _this.$contactEl.removeClass('active');
                _this.$illustVideo.css({'opacity' : '0'});
            }

        }


        init();

    });
})(jQuery);