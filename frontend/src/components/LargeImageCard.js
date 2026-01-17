import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function LargeImageCard() {
    return (
        <div style={{width: 180, height: 350, display: 'flex', margin: 10, borderStyle: "solid", borderRadius: 2, borderColor: "gray"}}>
            <div style={{width: 200, height: 250, textAlign: 'left'}}>
                <div style={{width: '100%', height: '100%', borderRadius: 10}}>
                    <img style={{width: '100%', height: '100%', margin: 0, borderRadius: 10}} src="https://avatars.mds.yandex.net/i?id=bb2065be301bb45bdf147f71ed912cf1_l-9067891-images-thumbs&n=13"/>
                </div>
                    <p style={{color: 'gray', margin: 0}}>BASE GAME</p>
                    <p style={{width: 100, margin: 0, color: 'white'}}>Red Dead: Redemption II</p>
                    <div style={{width: '100%', height: '10%', marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center'}}>
                        <div style={{width: 50, height: 25, backgroundColor: '#08AD2C', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <p style={{margin: 0, fontSize: 12, fontWeight: 'bold', color: 'white'}}>-15%</p>
                        </div>
                        <p style={{color: 'gray', marginLeft: 5}}>₽50.99</p>
                        <p style={{color: 'White', marginLeft: 5}}>₽50.99</p>
                    </div>
            </div>
        </div>
    );
}

export default LargeImageCard;