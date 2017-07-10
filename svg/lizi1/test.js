//pagecontainer为包含分页的父元素，successfun为对数据获取成功后对结果的渲染，each为每页显示多少条数据。
var pager = function(pagecontainer, successfun, each) {
    this.pagecontainer = pagecontainer;
    this.successfun = successfun || function() {};
    // this.pageDate = { page: 1, each: 1 };
    this.each = each;
    if (typeof this.pageGroup != "function") {
        pager.prototype.pageGroup = function(pageNum, pageCount) {
            if (pageCount > 5) {
                switch (pageNum) {
                    case 1:
                        this.pageIcon(1, 5, 0);
                        break;
                    case 2:
                        this.pageIcon(1, 5, 1);
                        break;
                    case pageCount - 1:
                        this.pageIcon(pageCount - 4, pageCount, 3);
                        break;
                    case pageCount:
                        this.pageIcon(pageCount - 4, pageCount, 4);
                        break;
                    default:
                        this.pageIcon(pageNum - 2, pageNum + 2, 2);
                        break;
                }
            } else {
                this.pageIcon(1, pageCount, pageNum - 1);
            }
        };
        pager.prototype.pageIcon = function(page, total, eq) {
            var myHtml = '';
            for (var i = page; i <= total; i++) {
                myHtml += '<li>' + i + "</li>";
            }
            $(this.pagecontainer + ' .page-nav ul').html(myHtml);
            $(this.pagecontainer + ' .page-nav' + " ul li").eq(eq).addClass('on');
        };

        pager.prototype.pageNav = function(now, pageCount, parUnion) {
            this.pageGroup(now, pageCount);
            var self = this;
            $(document).off('click', parUnion + ' li');
            $(document).on('click', parUnion + ' li', function() {
                var pageNum = parseInt($(this).html());
                self.pageGroup(pageNum, pageCount);
                self.pageDate.page = $(parUnion + " li.on").html();
                self.anchorAjax(self.pageDate);
            })
            $(parUnion + ' .page-jump-button').off();
            $(parUnion + ' .page-jump-button').on('click', function() {
                var num = parseInt($(parUnion + ' .page-jump-text').val());
                if (/^[1-9]\d*$/.test(num) && num <= pageCount) {
                    self.pageGroup(num, pageCount);
                } else {
                    toastfun('页数格式不对,请查看~');
                }
                self.pageDate.page = $(parUnion + ' li.on').html();
                self.anchorAjax(self.pageDate);
            })
            $(parUnion + ' .page-up').off();
            $(parUnion + ' .page-up').on('click', function() {
                var page = parseInt($(parUnion + ' li.on').html() - 1);
                if (page == 0) {
                    return;
                }
                self.pageDate.page = page;
                self.anchorAjax(self.pageDate);
            });
            $(parUnion + ' .page-down').off();
            $(parUnion + ' .page-down').on('click', function() {
                var page = parseInt($(parUnion + ' li.on').html()) + 1;
                if (page > pageCount) {
                    return;
                }
                self.pageDate.page = page;
                self.anchorAjax(self.pageDate);
            });

            $(parUnion + ' .page-first').off();
            $(parUnion + " .page-first").on('click', function() {
                if (pageCount > 5) {
                    self.pageIcon(1, 5, 0);
                } else {
                    self.pageIcon(1, pageCount, 0);
                }
                self.pageDate.page = $(parUnion + ' li.on').html();
                self.anchorAjax(self.pageDate);
            });
            $(parUnion + ' .page-last').off();
            $(parUnion + ' .page-last').on('click', function() {
                if (pageCount > 5) {
                    self.pageIcon(pageCount - 4, pageCount, 4);
                } else {
                    self.pageIcon(1, pageCount, pageCount - 1);
                }
                self.pageDate.page = $(parUnion + ' li.on').html();
                self.anchorAjax(self.pageDate);
            })

        };
        pager.prototype.pageSet = function(now, pageCount, alldata, parUnion) {
            var myNow = now || 1;
            $(parUnion).find('.page-number-now').html(myNow);
            $(parUnion).find('.page-number-total').html(pageCount);
            $(parUnion).find('.page-number-all').html(alldata);
        };
        pager.prototype.anchorAjax = function(ajaxdata) {
            this.pageDate = ajaxdata;
            this.pageDate.each = this.each;
            this.successfun(ajaxdata, this.render.bind(this));
        };
        pager.prototype.render = function(currentPage, recordCount, pageCount) {
            this.pageNav(currentPage, pageCount, this.pagecontainer + " .page-nav");
            this.pageSet(currentPage, pageCount, recordCount, this.pagecontainer + " .page-nav");
        };
    }
};
//pager 用法
var starListpager = new pager(".container", self.getShotVideoList, 20);
var pagedata = {
    page: 1
};
//anchorAjax为显示第几页数据，例如删除或添加后，调用此接口。
this.starListpager.anchorAjax(pagedata);