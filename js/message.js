AV.init({
    appId: 'RYJkWftaWUN54fdCkjJwIkQE-gzGzoHsz',
    appKey: 'iywNJ1wVhO8qWzQzO3VRgzBG'
})

var Message = AV.Object.extend('Message')
var message = new Message()

message.set('name', 'Jin Cheng')
message.set('content', 'Hello World!')
message.save().then(
    function(res) {
        alert('LeanCloud Rocks!')
    },
    function(err) {
        alert('提交失败！')
    }
)