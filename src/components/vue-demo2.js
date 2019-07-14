import logo from "../assets/logo.png";
import footer from "../footer.html";

var template = `
        <div>
            <h4>引入图片示例: 使用import导入图片,在多行文本中使用\${}引入变量</h4>
            <img src=${logo} alt="demo"/>
            <div :style="myStyle"></div>  
            ${footer}    
        </div>
        `;
