document.addEventListener('click', function(e){
  const btn = e.target.closest('.btn');
  if(btn){
    const dest = btn.dataset.dest;
    showDetail(dest);
  }
  if(e.target.id === 'closeDetail' || e.target.classList.contains('detail-panel')){
    hideDetail();
  }
});

function showDetail(destId){
  const detail = document.getElementById('detail');
  const content = document.getElementById('detailContent');

  const sample = {
    title: 'รายละเอียด ' + destId,
    body: '<p>นี่คือรายละเอียดของ ' + destId + '</p>'
  };

  content.innerHTML = '<div class="panel"><h2>' + sample.title + '</h2>' + sample.body + '</div>';
  detail.classList.remove('hidden');
}

function hideDetail(){
  document.getElementById('detail').classList.add('hidden');
}
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}
function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}