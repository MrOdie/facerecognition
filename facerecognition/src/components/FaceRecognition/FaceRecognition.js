import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return (
        <div className="center">
			<div className='absolute mt4'>
				<img className="shadow-5 border-white" src={imageURL} alt='' width='500' height='auto'/>
			</div>
		</div>
    )
}

// sample img http://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=24a3c366f89a3c604590e1da824200a1

// face http://www.taylorherring.com/blog/wp-content/uploads/2015/03/Archetypal-Male-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg

export default FaceRecognition;