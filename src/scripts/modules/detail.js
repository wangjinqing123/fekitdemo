var $ = require('../libs/jquery.js');

module.exports = function () {
  $.ajax({
    url: 'aa/bb/cc/dd',
    type: 'get',
    data: {},
    success: function (res) {
      console.log(res.data)
      var str = "";
      $.each(res.data, function (index, value) {
        str += "<tr><td>" + value + "</td></tr>";
      });
      $('.table').html(str);
    }
  });
};
