import { useState } from "react";
import printerUtils from "../../priter_utils/printerManager";
import "./tab.css"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PrinterModel from "../print/PrinterModel";
import AddCpmponent from "../add/addComponent";
import SettingPage from "../setting/setting";
import { PrintData } from "../bean";


function Menu(props: { utils: printerUtils }) {
    const [selectIndex, setSelectIndex] = useState(0);
    const [printeData, setPrinteData] = useState<PrintData[]>([]);


    function selectItem(index: number, lastIndex: number, event: Event) {
        setSelectIndex(index);
    }

    function dataChangelistener(data:PrintData[]){
         setPrinteData(data)
    }

    return (
        <div className="Menu" style={{height:'calc(100vh-200px)'}}>
            <div>
                <Tabs onSelect={selectItem} selectedIndex={selectIndex}>
                    <TabList className={'MenuAdd'}>
                        <Tab tabIndex="0" className={selectIndex == 0 ? 'SelectedName' : 'DisableName'}>
                            添加组件
                        </Tab>
                        <Tab tabIndex="1" className={selectIndex == 1 ? 'SelectedName' : 'DisableName'} >
                            设置
                        </Tab>
                        <Tab tabIndex="2" className={selectIndex == 2 ? 'SelectedName' : 'DisableName'}>
                            打印
                        </Tab>
                        <Tab tabIndex="3" className={selectIndex == 3 ? 'SelectedName' : 'DisableName'}>
                            存储样式
                        </Tab>
                        <Tab tabIndex="4" className={selectIndex == 4 ? 'SelectedName' : 'DisableName'}>
                            恢复样式
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className={'Plane'}>
                            <AddCpmponent initData={printeData}  dataChangelistener={dataChangelistener}/>
                        </div>
                    </TabPanel >
                    <TabPanel>
                        <div className={'Plane'}>
                            <SettingPage />
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div className={'Plane'}>
                            <PrinterModel printData={printeData} utils={props.utils} />
                        </div>
                    </TabPanel>
                    <TabPanel><div className={'Plane'} style={{ color: 'black'}}>暂不支持</div></TabPanel>
                    <TabPanel><div className={'Plane'} style={{ color: 'black'}}>暂不支持</div></TabPanel>
                </Tabs>


            </div >
            <div className="MenuLKist"></div>
        </div >
    );

}

export default Menu;