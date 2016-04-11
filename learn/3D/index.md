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

### 讨论

[周一见•深度解码│3D打印与三维创意设计课程牵引下的创新课程体系研究](http://mp.weixin.qq.com/s?__biz=MjM5NDgxMzY2MQ==&mid=2650396806&idx=1&sn=95e7e295f25db10228cfcbd51547788c&scene=1&srcid=0411mF3Xsnp0jF4ShqyjpKWs)
> 3D打印课程是以3D打印技术或3D打印机应用为主的课程。目前，根据对3D打印概念不同角度的理解，此类课程在义务教育阶段主要以三种形式呈现。第一，以3D打印机硬件探究为基础的课程。课程让学生近距离地了解、学习、组装、设计3D打印机。第二，以3D模型打印为基础的课程。学生在初步学习3D打印技术后，利用网络对感兴趣的或有需求的模型进行检索，进而在模型下载后应用3D打印机，最终将模型实体化，并进行表面渲染的学习过程。第三，以“傻瓜型”三维设计软件为基础的课程。学生利用不同类型的三维设计软件，快速搭建某种类型的简易模型，最终利用3D打印机将设计实体化的过程。

