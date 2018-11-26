export default function(props) {
    let { hp, attack, defense, spAtk, spDef, speed } = props
    let totalStats = hp + attack + defense + spAtk + spDef + speed;
    return totalStats;
    // return null;
}