// 页面加载完毕的时候获取DOM
// 鼠标滑动的时候触
// 将选中的文字上面的dom套一个highlight-dom
// 生成一个小图标: 当selectText消失的时候关闭

const SUCCESS_BTN_ID = 'successBtn';
const FAIL_BTN_ID = 'failBtn';

const HIGHLIGHT_MAP = {
    [SUCCESS_BTN_ID]: '#81c784',
    [FAIL_BTN_ID]: '#ff6f00'
}

const imgSrc = "data:image/png;base64,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"
const style = {
    img: `
        width:30px;
        cursor:pointer;
        z-index: 10;
        border-radius: 40px;
        box-shadow: 0px 2px 7px 0px rgb(39 43 49 / 20%);
    `,
    'buttonWrapper': `
        background: #fff;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
        padding: 0 15px;
        padding-right: 10px;
        position: relative;
        left: -15px;
        visibile: hidden;
    `
}


const template = `
    <div class="btnContainer" style="display: flex;align-items: center;">
        <img style="${style.img}" src="${imgSrc}"></img>
        <div class="button-wrapper" style="${style.buttonWrapper}">
            ${
                Object.keys(HIGHLIGHT_MAP).map(key => {
                    return `<pointer class="${key}" style="border-radius: 50%; cursor: pointer; margin-left: 10px;background: ${HIGHLIGHT_MAP[key]}; width:10px;height:10px;display:inline-block"></pointer>`
                }).join('\n')
            }
        </div>
    </div>
`
        // <button id="${SUCCESS_BTN_ID}">绿色</button>
        // <button id="${FAIL_BTN_ID}">红色</button>

let setBackground = null

function handleMouseUp(e) {
    const selectText = window.getSelection().toString()
    console.log(e.target.tagName.toLowerCase());
    if(e.target.tagName.toLowerCase() === 'pointer') {
        const className = e.target.className
        console.log(className);
        console.log(HIGHLIGHT_MAP[className]);
        setBackground(HIGHLIGHT_MAP[className])
        setPopup.remove()
    } else if(selectText) {
            const position = getMousePos(e)
            setPopup.pop(position)
            setBackground = hightlightText(e,selectText)
            window.onmouseup = null
    } else {
        setPopup.remove()
    }
}
window.addEventListener('mouseup',handleMouseUp)

function hightlightText(el,text) {
    return function (background) {
        const targetEl = el.target
        const replacedInnerHTML = targetEl.innerHTML.replace(
            text,
            `<lighter style="background:${background}">${text}</lighter>`
        )
        targetEl.innerHTML = replacedInnerHTML
    }
}

function getMousePos(event) {
    const e = event || window.event
    return {'x':e.pageX,'y':e.pageY}
}

// 单例
const setPopup = (function() {
    let element = null;
    return {
        pop({x,y}) {
            if(!element) {
                element = document.createElement('div')
                element.innerHTML = template
                document.body.appendChild(element)
                element.style.visibility = 'visible'
            }
            element.style = `color:red;position:absolute;top:${y-44}px;left:${x}px`
        },
        remove() {
            if(element) {
                element.style.visibility = 'hidden'
            }
        }
    }
})()

