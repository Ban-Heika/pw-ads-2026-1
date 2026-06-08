import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

// Ajuste o caminho da imagem caso tenha salvo em outro lugar
import minhaFoto from '../assets/minha-foto.jpg';

export default function SobreAutor() {
  // 2 Variável de estado 'likes' com valor inicial 0
  const [likes, setLikes] = useState(0);

  // 8 Função para incrementar likes e mostrar o alert
  const handleLikeClick = () => {
    const novoValor = likes + 1;
    setLikes(novoValor);
    alert(`Número atual de likes: ${novoValor}`);
  };

  return (
    <>
      {/* 3 Título usando Typography */}
      <Typography variant="h4" component="h1" gutterBottom>
        Sobre o autor
      </Typography>

      {/* 4 Componente Card do MUI */}
      <Card sx={{ maxWidth: 400, margin: '20px auto' }}>
        
        {/* 5 Upload/uso da foto com ajuste de altura */}
        <CardMedia
          sx={{ height: 450, objectPosition: 'top' }}
          image={minhaFoto}
          title="Foto de Raphael Marcelo"
        />
        
        <CardContent>
          {/* 6 Nome no título do cartão */}
          <Typography gutterBottom variant="h5" component="div">
            Raphael Marcelo Campos Vieira
          </Typography>
          
          {/* 7 Texto sobre mim */}
          <Typography variant="body2" color="text.secondary" align="justify">
            Sou Raphael e eu tenho cursado Ads a um tempo, não sou TÃO bom com codigos mas ao menos eu tento, tenho uma proficiencia maior com hadwere, ja que mexo com computadores des de novo. Meus Hobbys são colecionar Action Figures, e cozinhar.
          </Typography>
        </CardContent>
        
        <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
          {/* 8a e 8b botão único que incrementa os likes e exibe o alert */}
          <Button variant="contained" color="primary" onClick={handleLikeClick}>
            Curtir o Autor ({likes})
          </Button>
        </CardActions>
      </Card>
    </>
  );
}