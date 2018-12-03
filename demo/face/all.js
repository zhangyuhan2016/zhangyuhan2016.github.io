/* 初始化 */
/* 初始化 */
async function init () {
  // load face detection, face landmark model and face recognition models
  // 加载人脸检测、人脸标注模型和人脸识别模型
  console.info('加载人脸检测、人脸标注模型和人脸识别模型')
  let baseURL = window.location.pathname.split('/')
  baseURL.pop()
  baseURL = baseURL.join('/')
  await faceapi.nets.ssdMobilenetv1.load(baseURL + '/model')
  await faceapi.loadFaceLandmarkModel(baseURL + '/model')
  await faceapi.loadFaceRecognitionModel(baseURL +'/model')
  return true
}
/* 遮罩层 */
let timeTodo = null
function showDia (f, s,str) {
  clearInterval(timeTodo)
  let d = document.querySelector('dialog')
  if (f) {
    d.style.display = 'flex'
  } else {
    return d.style.display = 'none'
  }
  str = str || ['正在提取特征符,剩余时间为:','成功后会自动跳转首页,请选择进行测试']
  d.innerHTML = `<div class="rotate"></div><br>`
  let createTemplate = (str) => `<span>${str[0]}<span name="tip">${s}</span>s</span><br><span>${str[1]}</span>`
  d.innerHTML += createTemplate(str)
  let t = document.querySelector('dialog span[name="tip"]')
  if (s > 0) {
    clearInterval(timeTodo)
    timeTodo = setInterval(() => {
      if (s === 1) {
        t.innerText = 0
        return clearInterval(timeTodo)
      }
      t.innerText = --s
    }, 1000)
  }
}
