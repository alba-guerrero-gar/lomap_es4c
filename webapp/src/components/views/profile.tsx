import React from "react";
import { useSession, CombinedDataProvider, Image, LogoutButton, Text } from "@inrupt/solid-ui-react";
import { Button, Card, CardActionArea, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import { useNavigate, Navigate } from "react-router-dom";




function Profile(): JSX.Element {
  const navigate = useNavigate();
  const { session } = useSession();
  //console.log(session.info.webId);
  const logOut = () => {
    session.logout();
    navigate('/login'); 
   
  };
  const callMap = () => {
  
    // This will navigate to first component
    navigate('/map'); 
    //<Navigate to="/map" replace={true}/>
  };
  return (
    /*
    <>
          <div className="App">
            <header>
              <p>LoMap</p>
              <nav>
              <button className="separador">ver perfil</button>
              <button>cerrar sesión</button>
              </nav>
            </header>
            <div className = "perfil">
            <Image property={VCARD.hasPhoto.iri.value} width={480} />
            <h2 id = "name"> Nombre de usuario</h2>
      <h3 id = "complete"> Nombre completo : <Text property={FOAF.name.iri.value} /></h3>
      <h3 id = "email"> Correo electrónico : {FOAF.name.iri.value}</h3>
        </div>
          </div>
          
          <footer>
            <p>Escuela Ingeniería informática 2022-2023/ASW grupo lomap_es4c</p>
            <img src="./images/uniovi.png" alt="uniovi" />
          </footer>
        </>
        */
    <>
        <header>
        <p>LoMap</p>
        <nav>
        <button className="separador" onClick={callMap}>Mapa</button>
        <button onClick={logOut}>Cerrar sesión</button>
        
        </nav>
      </header>
      <h1> Datos del usuario</h1>
<div className ="profile">
  
    <Container fixed>
      {session.info.webId ? (
        <CombinedDataProvider 
          datasetUrl={session.info.webId} 
          thingUrl={session.info.webId}>
        <Card style={{ maxWidth: 480 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Text property={FOAF.name.iri.value} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
              <Text property={VCARD.organization_name.iri.value} />
            </Typography>
          </CardContent>

          <CardActionArea style={{ justifyContent: "center", display: "flex" }}>
            <Image property={VCARD.hasPhoto.iri.value} width={480} />
          </CardActionArea>
        </Card>
      </CombinedDataProvider>
      ): null }
      <LogoutButton >
        
        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
          Logout
        </Button>
        
      </LogoutButton>


    </Container>
    </div>
    </>
  );
}

export default Profile;