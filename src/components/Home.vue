<template>
  <div class="">
    <div class="myCard">
      <div class="header-section">
        <img 
          src="../assets/bureau-salle-reservation.jpg" 
          class="project-image"
          alt="Réservation de salles SESAME"
        />
        <h1 class="project-title">Plateforme de Gestion des Ressources SESAME</h1>
      </div>
      
      <div class="description-section">
        <p class="description-text">
          Ce projet vise à concevoir et développer une plateforme centralisée de
          gestion des matériels et des locaux au sein de l'Université SESAME.
          L'objectif est de faciliter la planification, la réservation et le
          suivi des salles et équipements (comme les vidéoprojecteurs), en offrant
          une interface intuitive et en temps réel.
        </p>
        <p class="description-text">
          Ce système permettra d'améliorer l'organisation interne, d'éviter les conflits
          d'utilisation et de maximiser l'efficacité des ressources disponibles
          dans un environnement universitaire en constante évolution.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.myCard {
  margin: 16px !important;
  border: 16px !important;
  padding: 32px !important;
  border-radius: 8px !important;
  /* background-color: #ffffff !important; */
}
.home-container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: #f5f7fa;
}

.content-card {
  max-width: 900px;
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  }
}

.header-section {
  position: relative;
  text-align: center;
  padding: 2rem 2rem 1rem;
  
  .project-image {
    width: 30%;
    max-height: 600px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .project-title {
    color: #2c3e50;
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #eaeaea;
  }
}

.description-section {
  padding: 1.5rem 2.5rem 2.5rem;
  
  .description-text {
    color: #4a5568;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 768px) {
  .home-container {
    padding: 1rem;
  }
  
  .content-card {
    border-radius: 8px;
  }
  
  .header-section {
    padding: 1rem;
    
    .project-title {
      font-size: 1.5rem;
    }
  }
  
  .description-section {
    padding: 1rem 1.5rem 1.5rem;
    
    .description-text {
      font-size: 1rem;
    }
  }
}
</style>