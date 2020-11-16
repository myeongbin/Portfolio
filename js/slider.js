console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // Image Slider.
        
        var _this = this;
        
        var _cuId = 0,
            _exId = 0,
            _max = void 0,
            _contentW = 0,
            _index0 = "0";

        var _isAni = false;

        function init() {
            variable();
            setting();
            addEvent();
            reset();
        }

        function variable() {

            _this.$win = $(window);

            _this.$workWrap = $('.work-wrap');
            
            // paddle navigation
            _this.$indexWrap = _this.$workWrap.find('.index-wrap');
            _this.$indexNumWrap = _this.$indexWrap.find('.index-num-wrap');
            _this.$indexNumEls = _this.$indexNumWrap.find('.index-num');

            _this.$paddleNav = _this.$workWrap.find('.paddle-nav');
            _this.$btnPaddle = _this.$paddleNav.find('button.arrow');
            _this.$btnPaddlePrev = _this.$paddleNav.find('button.arrow.prev');
            _this.$btnPaddleNext = _this.$paddleNav.find('button.arrow.next');

            // dot navigation
            _this.$dotNav = _this.$indexWrap.find('.dot-wrap');
            _this.$dotEl = _this.$dotNav.find('.index-dot li');

            // banner
            _this.$work = _this.$workWrap.children('.work');
            _this.$workArea = _this.$work.children('.work-area');
            _this.$contents = _this.$workArea.children('.work-contents');

            // background circle
            _this.$bgCircle = _this.$work.find('.bg-circle');
        }

        function setting(){
            _cuId = 0;
            _exId = _cuId;
            _max = _this.$contents.length;
        }

        function addEvent(){
            _this.$win.on('resize', onResize).trigger('resize');
            _this.$btnPaddle.on('click',onClickBtnPaddle);
            _this.$dotEl.on('click', onClickDotEl);
        }

        function reset(){
            paddleSet();
            dotSet();
            change();
            changeIndexNum();
        }

        function onResize(){
            _contentW = _this.$contents.width();

            _this.$workArea.width(_contentW * _max);
            _this.$contents.width(_contentW);

            contentSlide();
        }

        function onClickBtnPaddle(e){
            // if(_isAni) return;

            var $el = $(e.currentTarget);

            if($el.hasClass('prev')){
                _cuId--;

                if(_cuId < 0){
                    _cuId = 0;
                }

            }else if($el.hasClass('next')){
                _cuId++;

                if(_cuId > _max - 1){
                    _cuId = _max - 1;
                }
            }

            if(_exId !== _cuId){
                contentSlide();
                _this.$indexNumEls.html(_index0 + (_cuId + 1));
            }

            console.log(_cuId);
        }

        function onClickDotEl(e){
            if(_isAni) return;

            var id = _this.$dotEl.index(e.currentTarget);
            var circleId = _this.$bgCircle.index(e.currentTarget);
            
            if(_exId !== id){
                _cuId = id;
                // console.log('slide', 'click');
                contentSlide();
                _this.$indexNumEls.html( _index0 + (_cuId + 1));

                if(_exId !== circleId){
                    _cuId = circleId;
                    console.log('circle change');
                    // change();
                }
            }else{
                // console.log('disabled');
            }

        }

        function contentSlide(){
            // console.log('Slide');

            _isAni = true;

            var left =  _contentW * _cuId * -1;
            var duration = 350 + Math.abs(_exId - _cuId) * 150;

            paddleSet();
            dotSet();
            change();
            changeIndexNum();

            _this.$workArea.stop(true)
                .animate(
                    { 'left' : left }, // 애니메이션이 이뤄질 스타일
                    { // 애니메이션 옵션.
                        'duration' : duration, // duration - 애니메이션 속도.
                        'complete' : function() { // complete 함수 - 애니메이션 완료 callback 함수.
                            // console.log('Complete');
                            _exId = _cuId;
                            _isAni = false; // 애니메이션이 완료 - 클릭이 될 수 있는 상태.
                        }
                    });
        }

        function paddleSet(){
            _this.$btnPaddle.removeClass('disabled');
            if(_cuId === 0){
                _this.$btnPaddlePrev.addClass('disabled');
                // _this.$btnPaddlePrev.css();
            }else if(_cuId === _max - 1){
                _this.$btnPaddleNext.addClass('disabled');
            }
        }

        function dotSet(){
            _this.$dotEl.removeClass('selected');
            _this.$dotEl.eq(_cuId).addClass('selected');
        }

        function change(){
            _this.$bgCircle.removeClass('selected');
            _this.$bgCircle.eq(_cuId).addClass('selected');
            // console.log(_cuId);
        }

        function changeIndexNum(){
            if(_cuId === 0){
                _this.$indexNumEls.html('01');
                // _this.$btnPaddlePrev.css();
            }
        }
        
        // 전체 호출.
        init();
    });
})(jQuery);