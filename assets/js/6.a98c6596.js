(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{484:function(s,t,e){s.exports=e.p+"assets/img/flex1.c3a85016.png"},485:function(s,t,e){s.exports=e.p+"assets/img/flex2.388c46d3.png"},486:function(s,t,e){s.exports=e.p+"assets/img/flex3.049fc94d.png"},487:function(s,t,e){s.exports=e.p+"assets/img/flex4.d38a1fc3.png"},488:function(s,t,e){s.exports=e.p+"assets/img/flex5.6de64516.png"},489:function(s,t,e){s.exports=e.p+"assets/img/flex6.fe2d175b.png"},490:function(s,t,e){s.exports=e.p+"assets/img/flex7.2cfdfe79.png"},491:function(s,t,e){s.exports=e.p+"assets/img/flex8.e3fce17c.png"},492:function(s,t,e){s.exports=e.p+"assets/img/flex9.9ffd0d2a.png"},493:function(s,t,e){s.exports=e.p+"assets/img/flex10.42a9839e.png"},494:function(s,t,e){s.exports=e.p+"assets/img/flex11.e666ae10.png"},495:function(s,t,e){s.exports=e.p+"assets/img/flex12.02406286.png"},496:function(s,t,e){s.exports=e.p+"assets/img/flex13.803e6eb2.jpg"},497:function(s,t,e){s.exports=e.p+"assets/img/flex14.2c817576.png"},528:function(s,t,e){"use strict";e.r(t);var a=e(4),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"🍇flex布局🍇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🍇flex布局🍇"}},[s._v("#")]),s._v(" 🍇flex布局🍇")]),s._v(" "),a("p",[s._v("本文参考微信小程序的基本布局方法 - flex布局"),a("br"),s._v(" "),a("a",{attrs:{href:"https://developers.weixin.qq.com/ebook?action=get_post_info&docid=00080e799303986b0086e605f5680a",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"🐱‍👤开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🐱‍👤开始"}},[s._v("#")]),s._v(" 🐱‍👤开始")]),s._v(" "),a("p",[s._v("设置容器的属性有：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".css")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("row（默认值） | row-reverse | column |column-reverse\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("nowrap（默认值） | wrap | wrap-reverse\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("flex-start（默认值） | flex-end | center |space-between | space-around | space-evenly\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("stretch（默认值） | center  | flex-end | baseline | flex-start\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("stretch（默认值） | flex-start | center |flex-end | space-between | space-around | space-evenly\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[s._v("（试都能试出效果）")])]),s._v(" "),a("p",[a("strong",[s._v("总而言之，先把display选成flex吧！")])]),s._v(" "),a("h2",{attrs:{id:"🟢-flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟢-flex-direction"}},[s._v("#")]),s._v(" 🟢 flex-direction")]),s._v(" "),a("p",[s._v("flex-direction 就是用来选主轴的")]),s._v(" "),a("ul",[a("li",[s._v("row 是横")]),s._v(" "),a("li",[s._v("column 是竖")]),s._v(" "),a("li",[s._v("后面带-reverse就是相反方向")])]),s._v(" "),a("blockquote",[a("p",[s._v("有图片，但是懒得放，这个很好理解。（算了还是放）")])]),s._v(" "),a("p",[a("img",{attrs:{src:e(484),alt:"flex1"}}),s._v(" "),a("img",{attrs:{src:e(485),alt:"flex2"}})]),s._v(" "),a("h2",{attrs:{id:"🟢-flex-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟢-flex-wrap"}},[s._v("#")]),s._v(" 🟢 flex-wrap")]),s._v(" "),a("p",[s._v("允许换行")]),s._v(" "),a("ul",[a("li",[s._v("nowrap 不允许（默认）")]),s._v(" "),a("li",[s._v("wrap 允许换行")]),s._v(" "),a("li",[s._v("wrap-reverse （反方向\n"),a("img",{attrs:{src:e(486),alt:"flex3"}})])]),s._v(" "),a("h2",{attrs:{id:"🟢-justify-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟢-justify-content"}},[s._v("#")]),s._v(" 🟢 justify-content")]),s._v(" "),a("p",[s._v("主轴上的对齐方式（直接看图吧）\n"),a("img",{attrs:{src:e(487),alt:"flex4"}})]),s._v(" "),a("h2",{attrs:{id:"🟢-align-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟢-align-items"}},[s._v("#")]),s._v(" 🟢 align-items")]),s._v(" "),a("p",[s._v("行中的对齐方式（看图）\n"),a("img",{attrs:{src:e(488),alt:"flex5"}}),s._v(" "),a("img",{attrs:{src:e(489),alt:"flex6"}})]),s._v(" "),a("h2",{attrs:{id:"🟢-align-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🟢-align-content"}},[s._v("#")]),s._v(" 🟢 align-content")]),s._v(" "),a("p",[s._v("交叉轴方向上的对齐方式（look picture）\n"),a("img",{attrs:{src:e(490),alt:"flex7"}}),s._v(" "),a("img",{attrs:{src:e(491),alt:"flex8"}}),s._v(" "),a("img",{attrs:{src:e(492),alt:"flex9"}})]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"🔵设置项目的属性有："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵设置项目的属性有："}},[s._v("#")]),s._v(" 🔵设置项目的属性有：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".css")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0（默认值） | <integer>\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1（默认值） | <number>\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("0（默认值） | <number>\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("auto（默认值） | <length>\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("none | auto | @flex-grow @flex-shrink @flex-basis\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("auto（默认值） | flex-start | flex-end |center | baseline| stretch\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"🔵-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵-order"}},[s._v("#")]),s._v(" 🔵 order")]),s._v(" "),a("p",[s._v("设置项目沿主轴方向上的排列顺序，数值越小，排列越靠前。属性值为整数。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(493),alt:"flex10"}})]),s._v(" "),a("h2",{attrs:{id:"🔵-flex-shrink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵-flex-shrink"}},[s._v("#")]),s._v(" 🔵 flex-shrink")]),s._v(" "),a("p",[s._v("当项目在主轴方向上溢出时，通过设置项目收缩因子来压缩项目适应容器。属性值为项目的收缩因子，属性值取非负数。")]),s._v(" "),a("blockquote",[a("p",[s._v("计算过程 极其复杂，不过貌似挺少用到的。\n详情请看"),a("a",{attrs:{href:"https://developers.weixin.qq.com/ebook?action=get_post_info&docid=00080e799303986b0086e605f5680a",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("img",{attrs:{src:e(494),alt:"flex11"}})]),s._v(" "),a("h2",{attrs:{id:"🔵-flex-grow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵-flex-grow"}},[s._v("#")]),s._v(" 🔵 flex-grow")]),s._v(" "),a("p",[s._v("当项目在主轴方向上还有剩余空间时，通过设置项目扩张因子进行剩余空间的分配。属性值为项目的扩张因子，属性值取非负数。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(495),alt:"flex12"}})]),s._v(" "),a("h2",{attrs:{id:"🔵-flex-basis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵-flex-basis"}},[s._v("#")]),s._v(" 🔵 flex-basis")]),s._v(" "),a("p",[s._v("当容器设置flex-direction为row或row-reverse时，flex-basis和width同时存在，flex-basis优先级高于width，也就是此时flex-basis代替项目的width属性。")]),s._v(" "),a("p",[a("img",{attrs:{src:e(496),alt:"flex13"}})]),s._v(" "),a("h2",{attrs:{id:"🔵-flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵-flex"}},[s._v("#")]),s._v(" 🔵 flex")]),s._v(" "),a("p",[s._v("是flex-grow，flex-shrink，flex-basis的简写方式。值设置为none，等价于00 auto。值设置为auto，等价于1 1 auto。")]),s._v(" "),a("h2",{attrs:{id:"🔵-align-self"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔵-align-self"}},[s._v("#")]),s._v(" 🔵 align-self")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto（默认值） | flex-start | center | flex-end | baseline |stretch\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:e(497),alt:"flex14"}})]),s._v(" "),a("h2",{attrs:{id:"🐷-最后【完】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🐷-最后【完】"}},[s._v("#")]),s._v(" 🐷 最后【完】")]),s._v(" "),a("p",[s._v("我好像不是很喜欢总结“项目属性”"),a("br"),s._v("\n貌似是因为没怎么用到，"),a("br"),s._v("\n可能以后会再整理得更好些吧...")])])}),[],!1,null,null,null);t.default=n.exports}}]);