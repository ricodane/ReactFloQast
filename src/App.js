import './App.css';
import image from "./utils/background.jpg"

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${image})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover', width: '95%', margin: 40}}>
      <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column', }}>
        <div style={{flex: 1,}}>
          <div style={{width: '560px', height: '150px', textAlign:'justify', backgroundColor:'#FFFFFF', opacity: .8, justifyContent:'center', alignItems:'center', display: 'flex', marginTop: 150 }}>
            <p style={{color:'#8BC540', fontSize: 40, fontFamily:'sans-serif', lineHeight: '28px', alignItems:'center',  }}><span style={{color:'gray', fontSize: 45, fontStyle:'italic', fontWeight:'bold'}}>#</span><span style={{fontWeight:'bold'}}>Flo</span><span style={{color:'gray', fontFamily: 'sans-serif',  fontWeight: 'bold', fontStyle:'italic'}}>Qast</span> <span style={{color:"#000", fontSize: 24}}>The</span><br />
            <span style={{color:'#8BC540', fontSize: 32, fontFamily:'sans-serif', fontWeight: 'bold', fontStyle:'italic'}}>Fastest, Most Accurate</span><br />
            <span style={{color:"#000", fontSize: 24, paddingBottom: '8px', fontFamily:'sans-serif', fontStyle:'italic'}}>Way to Close Your Books!</span>
            </p>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <div style={{flexShrink: 0, marginBottom: '30px', width: '760px', height: '80px',  flexDirection:'row', display:'flex', justifyContent:'center',}}>
            <div style={{backgroundColor:"#8BC540", borderTopLeftRadius: '8px',  borderBottomLeftRadius: '8px', }}>
              <div style={{flexDirection:'column', position: 'relative', paddingLeft:'20px', }}>
                <div style={{content: '', display:'block', position: 'absolute',  width: 0, height: 0, borderTop: '40px solid transparent', borderBottom: '40px solid transparent', borderLeft: '22px solid #8BC540', left: '186px', top: -18 }}></div>
                <p style={{fontSize: '18px', fontWeight:'bold', color:"#FFFFFF",  marginBottom: '0px' }}>
                  SCHEDULE A DEMO
                </p>
                <p style={{fontSize: '12px', color:"#FFFFFF", marginTop: '0px'}}>
                  Learn More About FloQast.
                </p>
              </div>
            </div>
            <div style={{backgroundColor:'#FFFFFF', borderTopRightRadius: '8px', borderBottomRightRadius: '8px',}}>
              <p style={{fontSize: '18px', fontWeight:'bold', marginTop: '8px', marginBottom: '0px', color:'gray'}}>Learn How FloQast Can <span style={{color: '#8BC540'}}> Improve Your Month-End</span></p>
              <div style={{flexDirection:'row', display: 'flex', justifyContent: 'center', marginBottom: '8px', marginTop: '8px', marginLeft: '16px'}}>
                <input style={{marginLeft: '22px', marginRight: '4px', width: 140, }} type="text" placeholder="First Name*" />
                <input style={{marginLeft: '4px', marginRight: '4px', width: 140, }} type="text" placeholder="Email*" />
                <button style={{backgroundColor: '#8BC540', padding: '4px 24px', borderRadius: '2px', borderColor:'green', borderWidth: 1, marginLeft: '4px', marginRight: '14px', color:'#FFFFFF'}}>SCHEDULE NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
