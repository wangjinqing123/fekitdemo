var $ = require('./libs/jquery.js');

var common = require('./utils/common.util.js');

var tplHeader = require('./tpls/header.string');
var tplDetailBody = require('./tpls/index.body.string');
var tplfooter = require('./tpls/footer.string');

var list = require('./modules/index.js');


$(function(){
  common.renderHtml(tplHeader + tplDetailBody + tplfooter);
  list();//
});
