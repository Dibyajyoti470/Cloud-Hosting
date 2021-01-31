const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        // console.log(target);
        const count = +counter.innerText;
        let inc = 1;
        // let timeInc = 2;

        // console.log(count, target);

        if(count < target) {
            counter.innerText = count + inc;
            // timeInc = timeInc ^ 2;
            setTimeout(updateCount, 50);
        } else {
            count.innerText = target;
        }
    }

    updateCount();
});