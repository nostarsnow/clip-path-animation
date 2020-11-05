const $select = document.querySelector('#select')
$select.innerHTML = ['<option value="">请选择动画行数</option>']
  .concat(
    Array(10)
      .fill('')
      .map((v, i) => {
        return `<option value="${i + 1}">${i + 1}行展示</option>`
      })
  )
  .join('')
const $demo = document.querySelector('#demo')
$demo.innerHTML = '我是一个完整的盒子'
  .split('')
  .map((v, i) => {
    return `<p>${v}</p>`
  })
  .join('')
$select.addEventListener('change', function(e) {
  let value = e.target.value
  if (value) {
    $demo.removeAttribute('class')
    $demo.classList.add(`clip-right-${e.target.value}`)
  }
})
$select.value = 7
$demo.classList.add(`clip-right-7`)
