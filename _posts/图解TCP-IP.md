# 计算机发展的7个阶段

-   批处理 20世纪50年代

    磁带，卡带  COBOL FORTRAN

-   分时系统 20世纪60年代

    一人一机  BASIC

-   计算机之间的通信 20世纪70年代

-   计算机网络诞生 20世纪80年代

-   互联网普及 20世纪90年代

-   以互联网技术为中心的时代 2000年

    电话网--->IP网络

-   单纯连接到安全连接 TCP/IP的时代

# 协议

| 网络体系结构           | 协议                                       | 主要用途      |
| ---------------- | ---------------------------------------- | --------- |
| TCP/IP           | IP/ICMP/TCP/UDP/HTTP/TELENT/SNMP/SMTP... | 互联网、局域网   |
| IPX/SPX(NetWare) | IPX/SPX/NPC...                           | 个人电脑局域网   |
| AppleTalk        | DDP/RTMP/AEP/ATP/ZIP...                  | 苹果现有产品局域网 |
| DECnet           | DPR/NSP/SCP...                           | 前DEC小型机   |
| XNS              | IDP/SPP/PEP                              | 施乐公司网络    |
| OSI              | FTAM/MOTIS/VT/CMIS/CMIP/CLNP/CONP        |           |

## 分组交换协议

该协议将大数据分割成一个个叫做**包**(Packet)的较小单位进行传输。

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/group-swap.png)

## 关于标准化

ISO 国际级别的标准制定者，但是所制定的OSI并没有普及开，但是OSI设计之初的指导方针：`OSI参考模型`却常别用于网络协议定制中。

当前的业界标准为 **TCP/IP**,由IETF所建议并推进其标准化的一种协议。

## 协议分层与 OSI 参考模型

### 协议分层

将通信协议中必要功能分成了7层，每个分层都接受由它下一层所提供的特定服务，并负责为自己的上一层提供特定服务，上下层之间交互遵循的约定叫做*接口*，同层之间交互遵循的约定叫做*协议*。

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/osi-model.png)

### OSI	参考模型

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/osi-model2.png)

OSI 将通信功能划分为7个分层，称作 **OSI 参考模型。**

**OSI 协议**以 OSI 参考模型为基础界定了每个阶层的协议和每个阶层之间接口相关的标准。

遵循 OSI 协议的产品叫 OSI 产品，遵循的通信称为 OSI 通信。

### OSI 参考模型中各个分层的作用

![](https://raw.githubusercontent.com/sunwgit/sunwgit.github.io/master/_posts/img/osi-model3.png)

-   应用层

    为**应用程序**提供服务并规定应用程序中**通信相关细节**。包括文件传输、电子邮件、远程登录等协议。

-   表示层

    将应用处理的信息转换为适合网络传输的格式，或将来自下一层的数据转换为上一层能够处理的格式。因此，主要负责**数据格式转换**。

-   会话层

    负责**建立和断开通信连接**(数据流动的逻辑通路)，以及**数据的分割**等数据传输相关的管理。

-   传输层

    起可靠传输作用。**只在通信双方节点上进行处理，无需再路由器上处理。**

-   网络层

    将数据传输到目标地址。目标地址可能是多个网络通过路由器连接而成的某个地址。因此，该层主要负责**寻址、路由选择**。

-   数据链路层

    负责[物理层面上互连的]、[节点之间的]通信传输。

-   物理层

    负责 `0`、`1` 比特流（0、1序列）与电压的高低、光的闪灭之间的互换。

## OSI 参考模型通信处理举例

### 7 层通信

