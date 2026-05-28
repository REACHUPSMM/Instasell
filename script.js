let coins = 1250;

function login(){
  document.getElementById('loginPage').classList.remove('active');
  document.getElementById('homePage').classList.add('active');
}

function premiumAlert(){
  alert('🔥 Premium Upgrade Coming Soon 🚀');
}

function payNow(amount){
  window.location.href =
  `upi://pay?pa=BHARATPE2G0N0M1F1I90961@unitype&pn=GrowthRewards&am=${amount}&cu=INR`;
}

// TASKS
function completeTask(taskName,reward){
  coins += reward;

  document.getElementById('coinCount').innerText = `🪙 ${coins}`;

  alert(`✅ ${taskName} Completed!
+₹${reward} Added`);
}

// REFERRAL
function copyReferral(){
  navigator.clipboard.writeText('GROW123');

  alert('📋 Referral Code Copied!');
}

// WITHDRAWAL
function requestWithdraw(){

  const upi = document.getElementById('upi').value;
  const amount = document.getElementById('withdrawAmount').value;

  if(upi === '' || amount === ''){
    alert('⚠️ Fill All Details');
    return;
  }

  if(amount < 100){
    alert('❌ Minimum Withdrawal ₹100');
    return;
  }

  alert(`✅ Withdrawal Request Submitted
₹${amount} will process in 24-72 hrs`);
}

// BOTTOM NAVIGATION
function showSection(section){

  const sections = document.querySelectorAll('.main-section');

  sections.forEach(sec => {
    sec.style.display = 'none';
  });

  document.getElementById(section).style.display = 'block';
}