const navElements = document.querySelector('#navElements')  // 혹시 쓸수 있을 거 같아서 남겨둠.
const community = document.querySelector('#navElement-1')
const test = document.querySelector('#navElement-2')
const contact = document.querySelector('#navElement-3')
const customer = document.querySelector('#navElement-4')
const login = document.querySelector('#navElement-5')

community.addEventListener('click',function(){
    console.log('clicked 1')
})
test.addEventListener('click',function(){
    console.log('clicked 2')
})
contact.addEventListener('click',function(){
    console.log('clicked 3')
})
customer.addEventListener('click',function(){
    console.log('clicked 4')
})

document.addEventListener("DOMContentLoaded",function(){
    const navBurger = document.querySelector('#OpenNav')
    const navList = document.querySelector('#mobile-menu')

    navBurger.addEventListener('click',function(){
        navList.classList.toggle('hidden')
    })
})

// ================추가적인 고민 필요...===================
document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.querySelector('#darkModeSwitch');
    const body = document.body;
  
    darkModeSwitch.addEventListener('click', function() {
      body.classList.toggle('dark-mode'); // 다크 모드 클래스를 토글
  
      // 스위치 클릭 애니메이션을 위한 클래스 추가 및 제거
      darkModeSwitch.classList.add('is-active');
      setTimeout(function() {
        darkModeSwitch.classList.remove('is-active');
      }, 500);
    });
  });
  