export function loadMore(ele, cb) {
    //优化，防抖，定时器，永远触发最后一次
    let timer;
    ele.addEventListener('scroll', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            let { scrollTop, offsetHeight, scrollHeight } = ele;
            if (scrollTop + offsetHeight + 100 > scrollHeight) {
                cb();
            }
        }, 100);
    });
}
export function pullRefresh(ele, cb) {
    let disY = ele.offsetTop;
    let y = 0;
    ele.addEventListener('touchstart', function(e) {
        let startY = e.touches[0].pageY;
        function touchmove() {
            let moveY = e.touches[0].pageY;
            if (moveY - startY > 0) {
                y = moveY - startY;
                if (y > 50) {
                    y = 50;
                }
                ele.style.top = disY + y + 'px';
            } else {
                ele.removeEventListener('touchmove', touchmove);
                ele.removeEventListener('touchend', touchend);
            }
        }
        function touchend() {
            let timer;
            if (y < 50) {
                ele.style.top = disY + 'px';
            }
            if (y === 50) {
                timer = setInterval(() => {
                    y--;
                    if (y <= 0) {
                        clearInterval(timer);
                        cb();
                        return (ele.style.top = disY + 'px');
                    } else {
                        ele.style.top = disY + y + 'px';
                    }
                }, 15);
            }
            ele.removeEventListener('touchmove', touchmove);
            ele.removeEventListener('touchend', touchend);
        }
        ele.addEventListener('touchmove', touchmove);
        ele.addEventListener('touchend', touchend);
        if (!(ele.scrollTop === 0 && ele.offsetTop === disY)) {
            //在顶点并且在下拉中
            ele.removeEventListener('touchmove', touchmove);
            ele.removeEventListener('touchend', touchend);
        }
    });
}
