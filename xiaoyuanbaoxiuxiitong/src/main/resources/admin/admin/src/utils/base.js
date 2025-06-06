const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanbaoxiuxiitong/",
            name: "xiaoyuanbaoxiuxiitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanbaoxiuxiitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园报修系统"
        } 
    }
}
export default base
