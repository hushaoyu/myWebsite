/**
 * Created by husha_000 on 2017/3/13.
 */
$(function () {
    var paging = BootstrapPagination($("#paging"), {
        layoutScheme: "lefttext,firstpage,prevpage,pagenumber,nextpage,lastpage,pageinput,righttext",
        //记录总数。
        total: 50,
        //分页尺寸。指示每页最多显示的记录数量。
        pageSize: 9,
        //当前页索引编号。从其开始（从0开始）的整数。
        pageIndex: 0,
        //指示分页导航栏中最多显示的页索引数量。
        pageGroupSize: 5,
        //位于导航条左侧的输出信息格式化字符串
        leftFormateString: "本页{count}条记录/共{total}条记录",
        //位于导航条右侧的输出信息格式化字符串
        rightFormateString: "第{pageNumber}页/共{totalPages}页",
        //页码文本格式化字符串。
        pageNumberFormateString: "{pageNumber}",
        //分页尺寸输出格式化字符串
        pageSizeListFormateString: "每页显示{pageSize}条记录",
        //上一页导航按钮文本。
        prevPageText: "上一页",
        //下一页导航按钮文本。
        nextPageText: "下一页",
        //上一组分页导航按钮文本。
        //prevGroupPageText: "上一组",
        //下一组分页导航按钮文本。
        //nextGroupPageText: "下一组",
        //首页导航按钮文本。
        firstPageText: "首页",
        //尾页导航按钮文本。
        lastPageText: "尾页",
        //设置页码输入框中显示的提示文本。
        pageInputPlaceholder: "跳转",
        //接受用户输入内容的延迟时间。单位：毫秒
        pageInputTimeout: 800,
        //分页尺寸列表。
        //pageSizeList: [5, 10, 20, 50, 100, 200],
        //当分页更改后引发此事件。
        pageChanged: function (pageIndex, pageSize) {
            alert("page changed. pageIndex:" + pageIndex + ",pageSize:" + pageSize)
        }
    });
});