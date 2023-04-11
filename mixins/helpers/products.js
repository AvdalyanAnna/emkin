const filter = "filter=id;name;created_at;price_policy;show_details;contact_phone;description;price;type;slug;user_id;city_id;category_id;contacts;status;longitude;latitude"
const withField = "with=city:id,name;author:id,created_at,first_name,last_name;author.avatar;gallery"
const vip = "search=type:1;status:0,1"
const noVip = "search=type:0;status:0,1"

export {
  filter,
  withField,
  vip,
  noVip
}
