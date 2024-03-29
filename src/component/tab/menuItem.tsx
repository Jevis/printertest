import './tab.css'
import { TextData } from '../bean'
import TextComponent from '../dialog_component/text/component/textComponent'

export default function MenuItem(props: { id: number, data: TextData, editListenrer: (index: number, data: TextData) => void, removeListener: (index: number) => void }) {
   

    function editContent(d: TextData) {
        props.editListenrer(props.id, d);
    }

    return <div id={props.id + ''} className="MenuItem" >

        <div style={{ flex: 10 ,display:'flex',flexDirection:'column'}}>
            <div>
               {('位置：  ').concat (props.data.aligin == 'center'?'居中':(props.data.aligin == 'left'?'居左':'居右'))}
            </div>
            <div>
                {props.data.content}
            </div> 
        </div>
        <TextComponent type={0} data={props.data} listener={editContent} />
        <div style={{ flex: 1 }} onClick={(e) => props.removeListener(props.id)}>
            <img id='delect' style={{ width: '25px', height: '25px' }} src='data:image/png;base64,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'></img>
        </div>
    </div>
}