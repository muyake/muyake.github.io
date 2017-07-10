<%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
            <!DOCTYPE html>
            <html lang="en">
            <head>               
            </head>

            <body>
               普通<input type="radio" value="1" name='status' checked="checked"><span>|</span> 高级<input type="radio" value="2" name='status'> 次数 <input type="text" id='count'>
               <div>
                   <input type="button" value="开始" id='start'> 
               </div>
               <div class="result">
                   
               </div>
               <p>总结</p>
               <div class="zongjie">
                   
               </div>
               <div class="persent">
                   
               </div>
                <script>
                var userid = ${data.uid};
                var surplusNum=parseInt(${data.restRecharge});
                var restNebulaePiece = ${data.restNebulaePiece};
                restNebulaePiece = parseInt(restNebulaePiece);
                </script>
                <script src='http://s.xnimg.cn/a90527/wap/mobile/2017activity/nebula/js/index2.js'>
                </script>
            </body>
            </html>
