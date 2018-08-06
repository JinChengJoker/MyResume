(function() {
    var model = {
        init: function() {
            AV.init({
                appId: 'RYJkWftaWUN54fdCkjJwIkQE-gzGzoHsz',
                appKey: 'iywNJ1wVhO8qWzQzO3VRgzBG'
            })
        },
        messageList: function() {
            var query = new AV.Query('Message')
            return query.find()
        }
    }
    var view = document.getElementById('messages')
    var controller = {
        bindEvent: function() {
            var messageForm = view.querySelector('form')
            messageForm.addEventListener('submit', function(e) {
                e.preventDefault()
                var name = messageForm.querySelector('input[name=name]').value
                if(name.trim() === '') {
                    return alert('敢问大名？')
                }
                var content = messageForm.querySelector('input[name=content]').value
                if(content.trim() === '') {
                    return alert('总要说点啥吧？')
                }
                controller.pushMessage(name, content)
                messageForm.querySelector('input[name=content]').value = ''
            })
        },
        pushMessage: function(name, content) {
            var Message = AV.Object.extend('Message')
            var message = new Message()
            message.set('name', name)
            message.set('content', content)
            message.save().then(
                function(res) {
                    var list = view.querySelector('ul')
                    var liTag = document.createElement('li')
                    liTag.innerText = `${name}：${content}`
                    list.appendChild(liTag)
                },
                function(err) {
                    alert('提交失败！')
                }
            )
        },
        renderMessageList: function() {
            model.messageList().then(
                function(res) {
                    var list = view.querySelector('ul')
                    res.forEach((item) => {
                        var liTag = document.createElement('li')
                        liTag.innerText = `${item.attributes.name}：${item.attributes.content}`
                        list.appendChild(liTag)
                    })
                },
                function(err) {
                    console(err)
                }
            )
        }
    }
    model.init()
    controller.bindEvent()
    controller.renderMessageList()
})()