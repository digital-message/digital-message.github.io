---
layout: default
title: 从印刷术到3D打印
---

## {{ page.title }}

### 印刷术

- [Wikipedia](printing_en.pdf) (PDF)
- [维基百科](printing_cn.pdf) (PDF)

印刷术的核心不是纸墨，而是复制。我们的祖先发明了活字印刷。但是印刷术的核心：分享，却是让西方人掌握了。

可以说连[古滕堡](Gutenberg_cn.pdf) ([Gutenberg](Gutenberg_en.pdf))也没有看到印刷术的核心，一百五十年后欧洲才发现其中的“分享”的精髓。 

大众文化，媒体传播，地球村，[这些思想](Gutenberg_Galaxy.pdf)六十年代西方就有了。
六十年代后的计算机革命，七十年代的图形界面，八十年代的个人电脑，九十年代的互联网，二十一世纪的移动互联网，都是一脉相传的。
3D打印，VR，AR， AI都是今后五十年的科技进步的延续。 共享，山寨，创客，黑客，极客都是表面现象。 
核心是在新技术环境下新的社会生活和工作方式，其中“社会性”尤其重要。

### 3D打印

大家看看谁能用**现代桌面浏览器**打开[这个文件](https://github.com/skalnik/secret-bear-clip/blob/master/stl/clip.stl)?
还有[这个](https://github.com/canadaduane/house/blob/master/kitchen/faucet/faucet_fix2.stl), 谁的3D打印机可以打出来？

3D打印的核心不在于硬件，而是[文件](https://help.github.com/articles/3d-file-viewer/)。还有更重要的，文件背后的设计思想。

其实大家可以这个[文件](https://github.com/gklyne/things/blob/master/ServoBox/Servobox.stl)的[源代码](https://raw.githubusercontent.com/gklyne/things/master/ServoBox/Servobox.stl)见看看里面的片段，

```stl
solid OpenSCAD_Model
  facet normal -1.000000 -0.000000 -0.000000
    outer loop
      vertex -5.500000 11.000000 0.000000
      vertex -5.500000 11.000000 4.000000
      vertex -5.500000 23.000000 0.000000
    endloop
  endfacet
  ...
endsolid OpenSCAD_Model
```

这样的文件是学习几何的最好工具。[vertex](vertex.pdf)和[facet](facet.pdf)都是立体几何的核心概念。
只有几何才能保证三十年后还不会过时。
