AV.init({
    appId: 'RYJkWftaWUN54fdCkjJwIkQE-gzGzoHsz',
    appKey: 'iywNJ1wVhO8qWzQzO3VRgzBG'
})

var Message = AV.Object.extend('Message')
var message = new Message()

var messageForm = document.getElementById('messageForm')
messageForm.addEventListener('submit', function(e) {
    e.preventDefault()
    var name = messageForm.querySelector('input[name=name]').value
    var content = messageForm.querySelector('input[name=content]').value
    message.set('name', name)
    message.set('content', content)
    message.save().then(
        function(res) {
            alert('提交成功！')
        },
        function(err) {
            alert('提交失败！')
        }
    )
})

// 批量获取
var query = new AV.Query('Message')
query.find().then(
    function(messages) {
        var messageList = document.getElementById('messageList')
        messages.forEach((item) => {
            var liTag = document.createElement('li')
            liTag.innerText = `${item.attributes.name}：${item.attributes.content}`
            messageList.appendChild(liTag)
        })
    },
    function(err) {
        console.log(err)
    }
)