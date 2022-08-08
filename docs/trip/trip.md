## DefaultCarUseCount

 - 背景：给用车默认使用次数，省去新增人员后填写次数
 - 作用：默认值-1表示不限，可配置1到10以内的用车次数作为默认值
 - 默认值：true

## DefaultCarAmount

 - 背景：给用车默认金额，省去新增人员后填写金额
 - 作用：默认值-1表示不限，可配置大于等于0的用车金额作为默认值，金额单位元
 - 默认值：true

## CanModifyCarUseCount

 - 背景：是否允许企业员工修改用车次数，true代表允许修改，false代表不允许修改
 - 作用：控制用车次数修改
 - 默认值：true

## CanModifyCarAmount

 - 背景：是否允许企业员工修改用车金额，true代表允许修改，false代表不允许修改 默认true
 - 作用：控制用车金额修改
 - 默认值：true

## PcJumpPc

 - 背景：因为商旅只有H5一个端，对接了ECS的PC端以及移动端。从我的行程去预定跳转到第三方（例如：携程），因为第三方是有两个端，PC跟H5，默认我们对接的是H5，但是当用户是在PC环境下的时候，我们要跳转到第三方的PC环境。
 - 作用：从我的行程去预定跳转第三方是否是在PC环境跳转对应的PC环境
 - 默认值：true

## TimeSpanDays
  
  - 背景：有些企业要求可查询的行程记录大于一年，而我们产品设计的时候考虑为了减轻服务器查询的压力，以及市场上同类型产品的分析，我们默认是可跨度90天
  - 作用：我的行程列表页筛选条件可跨度范围
  - 默认值：90

## ThirdCtnReserve <Badge text="酒店"/>

  - 背景：
  - 作用：第三方供应商(酒店)继续预定开
  - 默认值：true


## HotelBookContactInfo

  - 背景：
  - 作用：酒店凌晨预订联系方式
  - 默认值：400-0586661-2

## FlightChangeDateType

  - 背景：不同的企业，要求机票改签的时候可选时间范围不同，所以新增此配置 
  - 作用：自定义机票改签的时候可选择时间范围
  - 默认值：Z
  - 可选值：0：改签当天 X0：单据范围内改签 X1: 后一天和单据范围内并集 X2：后两天和单据范围内并集 XN：后N天和单据范围内并集 Z:随意改签 AN:允许原日期范围往后N天 BN：允许原日期范围往前N天

## TrainChangeDateType

  - 背景：不同的企业，要求火车改签的时候有的必须选择当天，有的是不限日期 
  - 作用：设置火车改签时，是否可以修改日期
  - 默认值：Z
  - 可选值：Z：日期随意更换 P：日期不可更换

## TrainChangeCityType
  
  - 背景：
  - 作用：国内火车改签地点类型
  - 默认值：Z
  - 说明：Z：地点随意更换 P：地点不可更换

## IsHideCarAmount

  - 背景：有些企业要求在行程首页其它页签需要隐藏金额字段
  - 作用：是否隐藏其它页签金额字段
  - 默认值：false

## TabShowSequence

  - 背景：不同企业要求行程首页各个业务线的先后顺序不一
  - 作用：行程首页页签展示顺序
  - 默认值：Flight,Train,Hotel,Car,Other（分别对应机票,火车,酒店,用车,其他）

## TabItems
  
  - 背景： 不同企业对不同的业务线需求不一样，例如A企业只需要国内酒店业务线
  - 作用：行程首页展示标签可显示的业务线
  - 默认值： 国内机酒火用车其他
  - 可选值：国际酒店、国内酒店、国际机票、国内机票、火车票、国内用车、其他选项

## ReserveButtons

  - 背景：
  - 作用：
  - 默认值：

## IsCanLaterBookHotel <Badge text="国内酒店" />

 - 背景：
 - 作用：晚于<Badge text="入住日期" type="error"/>禁止酒店去预定按钮
 - 默认值： true

## IsAllowEstimateFeeZero

 - 背景：有些时候预估费用获取为0，那当预估费用为0的时候是否允许客户创建行程
 - 作用：预估费用为0，可以创建行程
 - 默认：true
 - 选项（多选）：IntFlight，IntHotel，Flight，Train，Hotel

## IsAllowOverStandard

  - 背景：


## IsAutoPushIntFlight <Badge text="国际机票" />
  
  - 背景：
  - 作用：审批通过自动推送询价数据
  - 默认： false


## IsPopTicketTime

  - 背景：有些企业需要在行程首页点击“查询”按钮的时候要求给出Dialog提示“在30分钟之内完成预定”
  - 作用：点击“查询”是否弹出Dialog “在30分钟之内完成预定”
  - 默认值：false


## IsPushDongMei

  - 背景：
  - 作用：是否推送东美
  - 默认值： false

## IsRemindUnReserved
  
  - 背景：
  - 作用：是否提醒未预定行程
  - 默认值： false【不提醒】

## EstimatedRatio
  
  - 背景：有些企业要求在计算预估费用的时候要乘以某个系数
  - 作用：计算预估费用根据实际预估出来的值乘以某个系数
  - 默认值：1

## IsIntFlightReturn <Badge text="国际机票" />

  - 背景：控制是否显示国际往返
  - 作用：国际机票往返
  - 默认值：false


## IsLimitFlightChangeTime :thumbsdown:
deprecated

## HotelBookContactInfo

  - 背景：
  - 作用：
  - 默认值：

## HotelAfterDays

  - 背景：有些企业要求酒店可选择日期要大于28天（我们目前对接的供应商可查询的酒店日期为28天以内）
  - 作用：创建行程的时候，酒店业务线可选择离店日期范围
  - 默认值：28

## BookBtnShowMsg
  
  - 背景：个别企业要求行程首页“查询”按钮改为其它文案
  - 作用：修改“查询”按钮的文案
  - 默认值：查询;Booking 【考虑中英文，第一个为中文，第二个为英文，中间用";"间隔】

## HotelMaxRoomNum

 - 背景：
 - 作用：设置行程首页最大酒店预订间数
 - 默认：5


## IntFlightChangeDateType
  
  - 背景：
  - 作用： 国际机票改签日期类型
  - 默认值：Z
  - 可选值：0：改签当天 X0：单据范围内改签 X1: 后一天和单据范围内并集 X2：后两天和单据范围内并集 XN：后N天和单据范围内并集 Z:随意改签

## BookIsNeedCertificateInfo

  - 背景：创建行程，也即在行程首页点击“查询”按钮的时候，是否需要完善证件信息，机酒火包含国际国内在进行资源预订的时候有的会需要证件信息有的是不需要，所以新增此配置以此区分。
  - 作用：预订资源是否需要
  - 默认值：false
  - 可选项：机票、酒店、火车、国际机票、国际酒店

::: warning
实际场景中只有酒店有此需求，有的酒店供应商不需要创建的时候提供证件信息，有的供应商则需要提供证件信息。机票火车【包含国际国内】无论创建什么都需要证件信息
:::

## IsCanTicketWithoutFlight <Badge text="国际机票" />

  - 背景：有些企业要求员工出差必须有指定航班才能走报价流程
  - 作用：是否可以不带航班去出票
  - 默认值：true

## TravelMealStandard

  - 背景：
  - 作用：差旅餐费标准
  - 默认值：0
  - 说明：如果大于0则按照实际标准自动计算

## OtherTypeHideList

  - 背景：
  - 作用：
  - 默认值：

## OtherStartCityRequiredList

  - 背景：
  - 作用：
  - 默认值：

## OtherStartCityHideList
  
  - 背景：
  - 作用：其他页签出发城市隐藏项
  - 默认值：none【空】

## OtherEndCityRequiredList

  - 背景：
  - 作用：其他页签出发城市必填项，默认none 非必填
  - 默认值：none【空】

## OtherEndCityHideList

  - 背景：
  - 作用：其他页签到达城市隐藏项
  - 默认值：none【空】
  - 可设置项：其他费用、自驾车、轮船、市内交通、长途汽车

## OtherAmountHideList

  - 背景：
  - 作用：其他页签预计金额隐藏项
  - 默认值：none【空】
  - 可设置项：其他费用、自驾车、轮船、市内交通、长途汽车

## OtherRemarkRequiredList

  - 背景：
  - 作用：
  - 默认值：

## OtherRemarkHideList

  - 背景：
  - 作用：
  - 默认值：

## AllowColleaguesWithOuter

  - 背景：有些企业不允许员工添加外部员工一同出行
  - 作用：是否允许内部员工添加外部员工一同出行
  - 默认值：true

## IsShowOtherIntCity

  - 背景：
  - 作用：行程首页其它页签是否显示国际城市
  - 默认值：true

## OtherStartDetailAddressRequiredList

  - 背景：
  - 作用：
  - 默认值：

## OtherEndDetailAddressRequiredList

  - 背景：
  - 作用：
  - 默认值：

## FeeTypeShowFormula

  - 背景：安姆科特供，其他页签的配置
  - 作用：根据城市类型计算差补，邮费等
  - 默认值：[]

安姆科配置
::: details

```js
{
    "PassportVisa":{
        "readonly":false,
        "formItem":{
            "1":{
                "id":"1",
                "label":"人数",
                "labelEn":"renshu",
                "readonly":false,
                "value":0,
                "type":"input",
                "option":Array[0]
            },
            "2":{
                "id":"2",
                "label":"招待小类",
                "labelEn":"zhaodaixiaolei",
                "readonly":true,
                "value":500,
                "type":"select",
                "option":[
                    {
                        "name":"一线城市外招250",
                        "nameEn":"250RMB-for guests of Tier 1 Cities",
                        "value":250
                    },
                    {
                        "name":"一线城市内招150",
                        "nameEn":"150RMB-for guests of Tier 2 Cities",
                        "value":150
                    },
                    {
                        "name":"其他城市外招150",
                        "nameEn":"150RMB-for employees of Tier 1 Cities",
                        "value":150
                    },
                    {
                        "name":"其他城市内招100",
                        "nameEn":"100RMB-for employees of Tier 2 Cities",
                        "value":100
                    }
                ]
            }
        }
    },
    "CompDispatchCar":{
        "readonly":true,
        "formItem":{
            "1":{
                "id":"1",
                "label":"公里数",
                "labelEn":"kilometers",
                "readonly":false,
                "value":0,
                "type":"input",
                "option":[

                ]
            },
            "2":{
                "id":"2",
                "label":"车贴",
                "labelEn":"Fee",
                "readonly":true,
                "value":"2元/公里",
                "type":"input",
                "option":[

                ]
            }
        }
    },
    "LateBreakfast":{
        "readonly":true,
        "formItem":{
            "1":{
                "id":"1",
                "label":"餐费",
                "labelEn":"kilometers",
                "readonly":true,
                "value":20,
                "type":"input",
                "option":[

                ]
            },
            "2":{
                "id":"2",
                "label":"顿数",
                "labelEn":"Fee",
                "readonly":false,
                "value":"0",
                "type":"input",
                "option":[

                ]
            }
        }
    },
    "TravelMeals":{
        "readonly":true,
        "formItem":{
            "1":{
                "id":"1",
                "label":"餐费",
                "labelEn":"kilometers",
                "readonly":true,
                "value":50,
                "type":"input",
                "option":[

                ]
            },
            "2":{
                "id":"2",
                "label":"顿数",
                "labelEn":"Fee",
                "readonly":false,
                "value":"0",
                "type":"input",
                "option":[

                ]
            }
        }
    }
}
```
:::
## OtherTabAmountList

  - 背景：
  - 作用：
  - 默认值：

## PassengerMaxChooseNum

  - 背景：不同企业要求可出行的人数不同
  - 作用：出行人可选择最多人数 最少为1 最多9人 默认 9
  - 默认值：9

## IsNeedReserveConfirm

  - 背景：
  - 作用：是否需要共享二次确认接收到行程信息
  - 默认值：true

## OtherBeforeDays

  - 背景：不同企业要求其他页签可选择日期不同
  - 作用：创建其他行程的时候，设置可选择时间范围，默认365天，默认可以选择365天以内的时间
  - 默认值：365

## OtherCityRequiredList

  - 背景：
  - 作用：其他页签城市必填项
  - 默认值：none【空】
  - 可设置项：其他费用、自驾车、轮船、市内交通、长途汽车

## HasStandardMode

  - 背景：有的企业【例如：物美】不需要差旅标准，所以我们做了无差标模式的行程
  - 作用：是否有差标模式
  - 默认值：true

## IsOtherTabCityRequired

  - 背景：
  - 作用：
  - 默认值：

## IsAddRecord

  - 背景：对于客户线下预订的单子，有些客户依然想通过商旅平台进行展示
  - 作用：是否开启补录功能
  - 默认值：false

## ControlType

  - 背景：
  - 作用：
  - 默认值：

## StrongModelJumpIndex
  
  - 背景：
  - 作用：
  - 默认值：

## IsYkbConfirmTicket

  - 背景：有些企业要求在合标的情况下不需要审批直接确认出票
  - 作用：创建完订单是否云快报直接出票无需共享确认
  - 默认值：false

## ReturnRebookButtons:thumbsdown:
deprecated

## ButtonsOnCreateSchedule

  - 背景：行程首页机票，酒店，火车（包含国内国际）页签标准产品下都有两个按钮，一个是“查询（对应的key：order）”，一个是“加入行程规划(对应的key：submit)”，有些企业要求，某些tab页签下不允许展示“查询”或“加入行程规划”按钮
  - 作用：设置某个页签下，“查询”和“加入行程规划”显示与否
  - 可选项： IntFlight，IntHotel，Flight，Train，Hotel
  - 默认值：all【可选值： all、submit、order】

## CanCancelCar

  - 背景：
  - 作用：是否可取消用车行程
  - 默认值：false

## SubmitBtnShowMsg

  - 背景：
  - 作用：
  - 默认值：

## IsShowCalendarView

  - 背景：有些企业要求展示行程日历模式的行程展示模式，默认是行程列表模式
  - 作用：我的行程列表页，是否显示可切换至行程日历视图的行程列表
  - 默认值：false

## IsHideHotelStandard
  
  - 背景：有些企业在酒店差旅标准不限的时候不需要显示差旅标准这一行
  - 作用：行程首页是否隐藏酒店差标
  - 默认值：false
  - 说明： 配置为“是”时，行程首页的酒店页签隐藏差标一行。
::: warning
现在酒店列表页也新增了差旅标准可显示内容，这块没有考虑进去？
:::


## PassengerShowType

  - 背景：是否允许内部人可搜索
  - 作用：如果值为2则表示不允许搜索出行人，默认是登录人
  - 默认值：默认是可以进行搜索

## IsTravelerInfoVaild

  - 背景：有些企业对出行人控制需要从共享一侧选完后带入商旅
  - 作用：共享传过来的出行人是否有效 有效则不允许内部出行人搜索
  - 默认值：false
  - 可选值：国内酒店，国际酒店，国内机票，国际机票，火车

## ProtectAgreeBtn
  
  - 背景：
  - 作用：隐私保护开启和关闭
  - 默认值：false

## LimitScope <Badge text="行程" />
  
  - 背景：不同企业在进行添加行程操作的时候，对行程元素的限制不同
  - 作用：添加行程限制范围【限制的元素有，时间、城市、人】
  - 默认值：true;true;true，分别对应时间、城市、人
  - 说明： true代表限制在单据范围内

## MaxHotelStandardMoney <Badge text="国内酒店" />
  
  - 背景：
  - 作用：酒店差标不限金额
  - 默认值：0

## OpenSuppliers <Badge text="行程" />

  - 背景：每个企业可能对商旅资源供应商有自己的要求，不一定使用云商旅的自有资源
  - 作用：行程去预定【机酒火】供应商
  - 默认值：元年云【ykb】
  - 可选值：火车，国内酒店，国际酒店，国际机票，国内机票，国内用车
  - 供应商列表：同程 Code:ly ，携程Code:ctrip ，元年云 Code:ykb ，滴滴Code:didi，东美 Code:dmair；国内用车：滴滴，悦行


## CanValidOrderChange
  
  - 背景：有些企业要求即便在有效期内的订单也不可变更
  - 作用：有效订单是否可以变更
  - 默认值：true

## IsScheduleListValid
  
  - 背景：
  - 作用： 我的行程是否展示卡片
  - 默认值：true

## IsSectionalQuote 
  
  - 背景：
  - 作用：是否使用分段报价
  - 默认值：false【在我的行程不显示 去出票按钮】

## SelfReservePermission
  
  - 背景：
  - 作用：
  - 默认值：

## ChangeButtons
  
  - 背景：不同的企业对行程变更需求不一样，有的需要有行程变更按钮有的则不需要
  - 作用：是否开启行程变更按钮功能
  - 默认值：true

## ChangeBtnShowType
  
  - 背景：我的行程列表页，行程变更行程单针对出行人和提单人均可见，但是某些企业要求仅仅提单人可见，出行人不可见【仅仅当提单人和出行人为不同人时】
  - 作用：行程变更但针对谁可见
  - 默认值：0
  - 可选值：0：行程变更提单人与出行人均可见  1：行程变更仅提单人可见

## ChangingTypeVersion
  
  - 背景：有些网络资源不好的时候，云这边显示已经提交成功，但是由于不确定的因素导致共享那边没有收到数据，所以需要共享那边通知云是否有收到数据。
  - 作用：变更通知版本 0：共享不通知行程变更中状态 1：通知 默认 1
  - 默认：1


## AddBtnShowType
  
  - 背景：我的行程列表页，添加行程针对谁可见，默认仅仅提单人可以看到，但有些企业要求提单人跟出行人都可见
  - 作用：添加行程是否可见
  - 默认值：1
  - 可选值：0：提单人与出行人均可见  1：仅提单人可见

## HandFillFlightBtn
  
  - 背景：国际机票业务线，因为我们对接的供应商有限，所有导致某些航班是缺失的，这时候就有一种手动填写模式，让用户可以自己填写所需航班，进入报价
  - 作用：是否显示手工填单按钮
  - 默认值：true

## beforeDays
  
  - 背景：创建行程（机票、酒店、火车、用车）可指定可创建时间范围
  - 作用：创建行程可以创建多少天以前的
  - 默认值：0

## AmountFormula
  
  - 背景：
  - 作用：预估费用额外计算公式
  - 默认值：P0_M1
  - 说明： 预估费用计算公式P100：加100，M2:乘以2，有先后顺序；注意此计算公式跟EstimatedRatio这个配置项是组合使用，如果两个都有配置的话，是先计算出预估费用乘以系数，然后再根据公式计算出最终的值

## EstimatedCostType
  
  - 背景：
  - 作用：预估费用计算公式
  - 默认值：1
  - 可选值：国内机票，国际机票，国内酒店，国际酒店，火车 1:最高价乘以房间数。2:所有出行人数标准合计预估，乘以固定系数。


## ecsTabItems
  
  - 背景：有些企业需要控制到不同的人进来可以看到不同的页签，但是目前已经有个企业级的配置项[TabItems](./trip.html#TabItems)了
  - 作用：
  - 默认值：

## placeOrderFlag
  
  - 背景：
  - 作用：
  - 默认值：

## controlType
  
  - 背景：强弱控
  - 作用：行程控制方式
  - 默认值：0【弱控】
  - 可选值：0【弱控】，1【强控】

## travelerInfo
  
  - 背景：
  - 作用：
  - 默认值：

