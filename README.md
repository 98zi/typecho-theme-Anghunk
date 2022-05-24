## Typecho-theme-Anghunk

![](./css/theme-logo.png)

>Anghunk一款基于Typecho博客程序的主题，简单整洁是主色调。

演示网址: [https://imhan.cn](https://imhan.cn)

仓库地址: [https://github.com/anghunk/Typecho-theme-Anghunk](https://github.com/anghunk/Typecho-theme-Anghunk)

**常见报错可以查看 [Issues](https://github.com/anghunk/Typecho-theme-Anghunk/issues)，我列出了一些部署过程中的问题和解决办法，并且如果你有问题也可以在[Issues](https://github.com/anghunk/Typecho-theme-Anghunk/issues)提出，这里我会第一时间看到解决。**


## 如何使用

### 1.下载文件

下载仓库在本地，上传到 `/usr/themes/`，并把主题文件夹改名为 `Anghunk`，否则可能会出现一些未知的问题。

基本配置项目在后台管理设置。

### 2.搜索功能

关于搜索功能，建议搭配 `ExSearch` 插件使用，如果你打算添加搜索功能，请在 `/themes/Anghunk/header.php` 文件中 `第32行`的注释取消即可。

>如果后台操作中报错，说明该插件在 typecho1.2 中不兼容，修改方案：将 `/plugins/ExSearch/Plugin.php` 的 `第276行` 注释掉，然后添加一行代码。

```php
// $widget = new $className(Typecho_Request::getInstance(), Typecho_Widget_Helper_Empty::getInstance());
$widget = $className::alloc();
```

## 图片展示

图片更新不及时，请进入上面的[演示网址](https://imhan.cn)，查看最新的主题。

|![](https://zburu.coding.net/p/img/d/pic-cdn/git/raw/main/2022/05/09/aa2207866648bd86280eb957a6759727.png)|![](https://zburu.coding.net/p/img/d/pic-cdn/git/raw/main/2022/05/09/3e72febdf75d5f6618296823e7ecccb0.png)|
|---|---|
|![](https://zburu.coding.net/p/img/d/pic-cdn/git/raw/main/2022/05/09/4a7c17ee31fa19ab008471aeaf8366f2.png)|![](https://zburu.coding.net/p/img/d/pic-cdn/git/raw/main/2022/05/09/a789d3f50ce39d8aa3f6933f3720c7f8.png)|

## LICENSE

[LICENSE](./LICENSE)

[作者: zburu](https://imhan.cn)
