import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">MySelf Kazi </h1>
                <p>
                    🔭 I’m currently working on ...Web Development <br></br>
                    🌱 I’m currently learning ...REACT Js<br></br>
                    👯 I’m looking to collaborate ...WIth AN Energetic COder!!!<br></br>
                    💬 Ask me about ...anything.<br></br>
                    📫 How to reach me: ... Just MSg me<br></br>
                    😄 Pronouns: ... HE/him<br></br>
                    ⚡ Fun fact: ... THe WOrld In YOu LIve IS created BY YOUR own MIND!!!<br></br>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Example;