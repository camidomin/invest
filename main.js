const chart=document.querySelector("#chart").getContext('2d');

//create a new chart instance
new Chart(chart,{
    type: 'line',
    data:{
        labels:['Jan','Feb','Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Set', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data:[79374, 83537, 89631, 59095, 87828, 76684, 83584, 68847, 88116, 91004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data:[74569, 78567, 93254, 84225, 84527, 98569, 95695, 95624, 83200, 75000],
                borderColor: 'blue',
                borderWidth: 2
            },
            
        ]
    },
    options:{
        responsive:true
    }
})

//show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none'
})



//change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',() => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

