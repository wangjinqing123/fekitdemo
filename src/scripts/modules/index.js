var $ = require('../libs/jquery.js');

module.exports = function () {
  $.ajax({
    url: '/api/getIndexList',
    type: 'get',
    data: {},
    success: function (res) {
      console.log(res.data)
      var str = "";
      $.each(res.data, function (index, value) {
        str += "<li>" + value + "</li>";
      });
      $('.body ul').html(str);
    }
  });
};
