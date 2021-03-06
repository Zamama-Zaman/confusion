import React from 'react';
import { Loading } from './LoadingComponent';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import {baseUrl} from "../redux/baseUrl"
function RenderCard({item, isLoading, errMess}) {

 
    if (isLoading || item==null) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else if(item!=null){
        console.log(item)
        return(
           
      <Card>
          <CardImg src={baseUrl+item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
        );
    }

}

function Home(props) {
    console.log(props.promo);
  return(
      <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.dish}  isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.promo} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.leader} />
              </div>
          </div>
      </div>
  );
}

export default Home;   