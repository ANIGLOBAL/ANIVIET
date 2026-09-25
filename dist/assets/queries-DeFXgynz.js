const e=`
  id
  idMal
  title {
    romaji
    english
    native
  }
  type
  format
  status
  description(asHtml: false)
  startDate { year month day }
  endDate { year month day }
  season
  seasonYear
  episodes
  duration
  chapters
  volumes
  countryOfOrigin
  source
  coverImage {
    large
    medium
    color
  }
  bannerImage
  genres
  synonyms
  averageScore
  meanScore
  popularity
  trending
  favourites
  tags {
    name
    description
    rank
    isGeneralSpoiler
    isMediaSpoiler
  }
  isAdult
  siteUrl
`,a=`
  relations {
    edges {
      node {
        id
        title { romaji english native }
        type
        format
        coverImage { large medium }
      }
      relationType
    }
  }
  characters(sort: ROLE, perPage: 10) {
    edges {
      node {
        id
        name { full first last native }
        image { large medium }
        description
      }
      role
    }
  }
  staff(sort: RELEVANCE, perPage: 10) {
    edges {
      node {
        id
        name { full first last native }
        image { large medium }
        primaryOccupations
      }
      role
    }
  }
  studios {
    edges {
      node {
        id
        name
        isAnimationStudio
      }
      isMain
    }
  }
  recommendations(sort: RATING, perPage: 6) {
    edges {
      node {
        mediaRecommendation {
          id
          title { romaji english native }
          coverImage { large medium }
          averageScore
        }
        rating
      }
    }
  }
  nextAiringEpisode {
    episode
    airingAt
  }
`,t=`
  query ($search: String!, $type: MediaType, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: $type, sort: POPULARITY_DESC) {
        ${e}
      }
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
    }
  }
`,r=`
  query ($id: Int!) {
    Media(id: $id) {
      ${e}
      ${a}
    }
  }
`,i=`
  query ($ids: [Int]!) {
    Page(perPage: 50) {
      media(id_in: $ids) {
        ${e}
      }
    }
  }
`,s=`
  query ($type: MediaType, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type, sort: TRENDING_DESC, isPopular: true) {
        ${e}
      }
      pageInfo {
        total
        hasNextPage
      }
    }
  }
`,n=`
  query ($season: MediaSeason!, $seasonYear: Int!, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC) {
        ${e}
      }
      pageInfo {
        total
        hasNextPage
      }
    }
  }
`;export{i as MEDIA_BY_IDS_QUERY,r as MEDIA_BY_ID_QUERY,e as MEDIA_FIELDS,a as MEDIA_LIST_FIELDS,t as SEARCH_MEDIA_QUERY,n as SEASON_MEDIA_QUERY,s as TRENDING_MEDIA_QUERY};
