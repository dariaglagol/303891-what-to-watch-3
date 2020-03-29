export default class FilmModel {
  constructor(film) {
    this.name = film[`name`];
    this.posterUrl = film[`poster_image`];
    this.previewImage = film[`preview_image`];
    this.promoCover = film[`background_image`];
    this.backgroundColor = film[`background_color`];
    this.description = film[`description`];
    this.rating = film[`rating`];
    this.scoresCount = film[`scores_count`];
    this.director = film[`director`];
    this.actors = film[`actors`] || [];
    this.runTime = film[`run_time`];
    this.genre = film[`genre`];
    this.released = film[`released`];
    this.id = film[`id`];
    this.isFavorite = Boolean(film[`favorite`]);
    this.videoLink = film[`video_link`];
    this.preview = film[`preview_video_link`];
  }

  toRAW() {
    return {
      'name': this.name,
      'poster_image': this.posterUrl,
      'preview_image': this.previewImage,
      'background_image': this.promoCover,
      'background_color': this.backgroundColor,
      'description': this.description,
      'rating': this.rating,
      'scores_count': this.scoresCount,
      'director': this.director,
      'actors': this.actors,
      'run_time': this.runTime,
      'genre': this.genre,
      'released': this.released,
      'id': this.id,
      'favorite': this.isFavorite,
      'video_link': this.videoLink,
      'preview_video_link': this.preview,
    };
  }

  static parseFilm(film) {
    return new FilmModel(film);
  }

  static parseFilms(films) {
    return films.map(FilmModel.parseFilm);
  }
}
