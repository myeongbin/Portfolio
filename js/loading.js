console.log("Script Load");
(function($){
    $(document).ready(function() {
        console.log('jQuery Ready');
        
        _this = this;

        function init(){
            layout();
            addEvent();
        }

        function layout(){
            _this.$win = $(window);

            _this.$body = $('body');
            _this.$container = _this.$body.find('#container');

            _this.$loading = _this.$body.find('#load');
            _this.$bar = _this.$loading.find('.bar');
            
        }

        function addEvent(){
            rotateBar();

            _this.$win.on('load', function(){
                _this.$body.css({'overflow' : 'hidden'});
                _this.$loading.delay('2700').slideUp('1500', function(){
                    _this.$body.css({'overflow-y' : 'auto'});
                });
            })
        }

        function rotateBar(){
            // _this.$bar.animate(
            //     {rotate : '180deg'} , 1000
            // );

            _this.$bar.css({
                
            })
        }

        init();

    });
})(jQuery);