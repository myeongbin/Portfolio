var cursorBg = document.querySelector('#cursor-bg'),
    cursorDot = document.querySelector('#cursor-dot');

var logo = document.querySelector('.logo a'),
    pageName = document.querySelector('.page-name a'),
    line = document.querySelector('.line'),
    contactEls = document.querySelectorAll('.contact ul li a'),
    word = document.querySelectorAll('.word'),
    wordEl = document.querySelector('.rainbow'),

    dotEl = document.querySelector('.index-dot'),

    body = document.querySelector('body');

    
    // Mouse Move
    function onMouseMove(e){
        cursorBg.style.display = 'block';
        cursorBg.style.left = e.clientX + "px";
        cursorBg.style.top = e.clientY + "px";
        cursorBg.style.transition = '0.15s ease';

        // cursorDot.style.display = 'block';
        // cursorDot.style.left = e.clientX + "px";
        // cursorDot.style.top = e.clientY + "px";
        // cursorDot.style.transition = '0.15s ease';

        // cursorBg.style.transition = "all 0.0001s ease";
        // cursorDot.style.transition = "all 0.0001s ease";
    }

    // Mouse Enter
    function onMouseEnter(e){
        // console.log(enter);
        cursorBg.style.width = "80px";
        cursorBg.style.height = "80px";
        cursorBg.style.backgroundColor = "#000";
        // cursorBg.style.mixBlendMode = "difference";
        cursorBg.style.zIndex = "-1";

        if(e.currentTarget == logo){
            // logo.style.display = 'block';
            logo.style.color = 'var(--main-bg-color)';
            console.log('logo');
        }
        if(e.currentTarget == pageName){
            // pageName.style.display = 'block';
            pageName.style.color = 'var(--main-bg-color)';
            console.log('pageName');
        }
        if(e.currentTarget == wordEl){
           body.style.backgroundColor = '#121212';
           logo.style.color = 'var(--main-bg-color)';
           pageName.style.color = 'var(--main-bg-color)';
           line.style.borderColor = 'var(--main-bg-color)';

           for(var i = 0; i < word.length; i++){
                word[i].style.color = 'var(--main-bg-color)';
                contactEls[i].style.color = 'var(--main-bg-color)';
           }
           wordEl.style.color = 'transparent';
        //    console.log(wordEl);
        }
        
    }

    // Mouse Leave
    function onMouseLeave(e){
        cursorBg.style.width = "10px";
        cursorBg.style.height = "10px";
        cursorBg.style.mixBlendMode = "none";
        cursorBg.style.zIndex = "999";
        // console.log(cursorBg);

        logo.style.color = "#000";
        pageName.style.color = "#000";
        body.style.backgroundColor = "var(--main-bg-color)";
        line.style.borderColor = '#000';

        for(var i = 0; i < word.length; i++){
            word[i].style.color = '#000';
            contactEls[i].style.color = '#000';
        }
        // console.log('out');
    }


    window.addEventListener('mousemove', onMouseMove);
    // cursorBg.addEventListener('mouseenter', onMouseEnter);
    // cursorBg.addEventListener('mouseleave', onMouseLeave);
    logo.addEventListener('mouseenter', onMouseEnter);
    logo.addEventListener('mouseleave', onMouseLeave);
    pageName.addEventListener('mouseenter', onMouseEnter);
    pageName.addEventListener('mouseleave', onMouseLeave);
    wordEl.addEventListener('mouseenter', onMouseEnter);
    wordEl.addEventListener('mouseleave', onMouseLeave);
    
    