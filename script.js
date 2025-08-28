const services = [
  {id:'nat', name:'জাতীয় জরুরি সেবা', en:'National Emergency', number:'999', badge:'সার্বক্ষণিক', icon:'emergency.png'},
  {id:'pol', name:'পুলিশ', en:'Police', number:'999', badge:'পুলিশ', icon:'police.png'},
  {id:'fire', name:'ফায়ার সার্ভিস', en:'Fire Service', number:'999', badge:'দমকল', icon:'fire-service.png'},
  {id:'amb', name:'অ্যাম্বুলেন্স', en:'Ambulance', number:'1994-999999', badge:'স্বাস্থ্য', icon:'ambulance.png'},
  {id:'women', name:'নারী ও শিশু সহায়তা', en:'Women & Child Helpline', number:'109', badge:'সহায়তা', icon:'emergency.png'},
  {id:'acc', name:'দুদক', en:'Anti-Corruption', number:'106', badge:'সরকারি', icon:'emergency.png'},
  {id:'elec', name:'বিদ্যুৎ বিভ্রাট', en:'Electricity Outage', number:'16216', badge:'বিদ্যুৎ', icon:'emergency.png'},
  {id:'brac', name:'ব্র্যাক', en:'Brac', number:'16445', badge:'এনজিও', icon:'emergency.png'},
  {id:'rail', name:'বাংলাদেশ রেলওয়ে', en:'Bangladesh Railway', number:'163', badge:'পরিবহন', icon:'emergency.png'},
];

let heartCount=0, coinCount=100, copyCount=0;

function renderCards(){
  const cards=document.getElementById('cards');
  cards.innerHTML=services.map(s=>`
    <div class="card">
      <button class="heart"><img src="icons8-heart-50.png" alt="Heart" /></button>
      <!-- Icon + Name -->
      <div class="head">
        <img src="${s.icon}" alt="${s.en}" class="card-icon" />
        <div class="service-name">
          <div class="bn">${s.name}</div>
          <small class="en">${s.en}</small>
        </div>
      </div>
      <!-- Number + Badge -->
      <div class="number">${s.number}</div>
      <div class="badge">${s.badge}</div>
      <!-- Actions -->
      <div class="actions">
        <button class="copy" data-number="${s.number}" data-name="${s.en}">Copy</button>
        <button class="call" data-number="${s.number}" data-name="${s.en}">Call</button>
      </div>
    </div>`).join('');
  
  
  document.querySelectorAll('.heart').forEach(btn=>btn.onclick=()=>{
    heartCount++;
    document.getElementById('heartCount').innerText=heartCount;
  });

 
  document.querySelectorAll('.copy').forEach(btn=>btn.onclick=()=>{
    const num=btn.dataset.number;const name=btn.dataset.name;
    navigator.clipboard.writeText(num);
    alert(`${name} (${num}) copied!`);
    copyCount++;document.getElementById('copyCount').innerText=copyCount;
  });

  
  document.querySelectorAll('.call').forEach(btn=>btn.onclick=()=>{
    if(coinCount<20){alert('Not enough coins!');return;}
    const num=btn.dataset.number;const name=btn.dataset.name;
    coinCount-=20;document.getElementById('coinCount').innerText=coinCount;
    const time=new Date().toLocaleTimeString();
    alert(`Calling ${name} (${num}) at ${time}`);
    const li=document.createElement('li');
    li.textContent=`${name} (${num}) — ${time}`;
    document.getElementById('historyList').appendChild(li);
  });
  
document.getElementById("clearHistory").addEventListener("click", () => {
  document.getElementById("historyList").innerHTML = "";
});

}

renderCards();
