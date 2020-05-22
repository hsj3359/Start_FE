const $btn = document.querySelector('#search_btn');
const $text = document.querySelector('#search');
const $result = document.querySelector('#result');
const url = 'https://dapi.kakao.com/v2/search/web ';
const header = { "Authorization": "KakaoAK 4ed0f12df2001ac984664c8998a2f58e" };

function success(data) {
  result.json().then((data) => { });
  const lis = document.map((doc) => {
    return '<li class ="list-froup-item"><a href="${doc.url}"> target="blank>${doc.contents}</a></li>'
  })
  $result.innerHTML = '<ul class="list-group list-group-flush">${li.join("",)} <ul>';
}

function error() {
  console.log("error");

}

function serch() {
  const { value } = $text.value;
  if ($text.value == '') {
    alert('검색어를 입력하세요')
    return false;
  }
  return true;
  fetch('${url}?query=${value}', { header }).then((res) => res.json).then(success).catch(error);
}

$btn.addEventListener('click', serch)
