import * as Dialog from '@radix-ui/react-dialog';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import EditAddButton from './alterDialg';
import EscPosEncoder from 'esc-pos-encoder';
import { useEffect, useState } from 'react';
import { PrintData, TabPrintData } from '../bean';

export default function AddCpmponent(props: { initData: PrintData[], dataChangelistener: (data: PrintData[]) => void }) {

    const [printeData, setPrinteData] = useState<PrintData[]>(props.initData);


    useEffect(() => {
        props.dataChangelistener(printeData)
    }, [printeData])


    function addOrEditEncoder(index: number, encode: PrintData) {
        if (index < 0) {
            setPrinteData([...printeData, encode])
        } else {
            var list = printeData.map((d, i) => {
                if (i === index) {
                    return encode;
                }
                return d;
            })
            setPrinteData([...list])
        }

    }




    function delectData(index: number) {
        setPrinteData(printeData.filter((v, i) => i != index))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <div style={{ overflow: 'scroll', height: '800px', backgroundColor: '#282c34', paddingTop: '20px', paddingBottom: '20px', borderRadius: '10px', overflowX: 'hidden' }}>
                {

                    printeData.map((d, i) => {
                        return <div style={{ display: 'flex', flexDirection: 'row', width: 'calc(100vw - 220px)', marginBottom: '20px', backgroundColor: 'white', borderRadius: '20px', marginLeft: '20px', marginRight: '20px', alignItems: 'center' }}>
                            <div style={{ flex: 17, fontSize: '18px', color: 'black', marginLeft: '20px', marginRight: '20px' }}>
                                <div style={{ display: 'flex' }}>
                                    {
                                        d instanceof TabPrintData ?
                                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px', marginRight: '40px', height: '400px' ,width:'100%'}}>
                                                <div style={{marginBottom:'20px'}}>{d.showText}</div>
                                                {
                                                    d.tabData.map((d) => {
                                                        return <div style={{ display: 'flex', flexDirection: 'row' ,width:'100%'}}>
                                                            {
                                                                d.tabConfigs.map((data,index) => {
                                                                    return <div style={{ flexGrow: data.width, width: '20px',color: 'black', height: '30px', justifyContent: data.align, display: 'flex', marginLeft: data.marginLeft, marginRight: data.marginRight }}>
                                                                        {d.tabData[index].content}
                                                                    </div>
                                                                })
                                                            }
                                                        </div>
                                                    })

                                                }
                                            </div>
                                            :
                                            <div style={{ height: '40px' }}>  {d.showText}</div>

                                    }
                                </div>
                            </div>
                            <EditAddButton key={i} initData={d} addEncoderListen={(d) => {
                                addOrEditEncoder(i, d)
                            }}></EditAddButton>
                            <div style={{ flex: 1 }} onClick={(e) => { delectData(i) }}>
                                <img id='delect' style={{ width: '25px', height: '25px' }} src='data:image/png;base64,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'></img>
                            </div>
                        </div>
                    })

                }


            </div>
            <EditAddButton key={'edittext'} initData={null} addEncoderListen={(d) => {
                addOrEditEncoder(-1, d)
            }}></EditAddButton>


        </div>
    );
}