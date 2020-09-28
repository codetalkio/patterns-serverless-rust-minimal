use dynomite::Item;
use uuid::Uuid;

#[derive(Item)]
pub struct Movie {
    #[dynomite(partition_key)]
    pub pk: String,

    #[dynomite(sort_key)]
    pub sk: Uuid,

    pub name: String,

    pub year: u16,
}
