export function shallowEqual(a, b) {
    var k1 = Object.keys(a);
    var k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
export function flatten(a) {
    const target = [];
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j) {
            target.push(a[i][j]);
        }
    }
    return target;
}
export function first(a) {
    return a.length > 0 ? a[0] : null;
}
export function merge(m1, m2) {
    var m = {};
    for (var attr in m1) {
        if (m1.hasOwnProperty(attr)) {
            m[attr] = m1[attr];
        }
    }
    for (var attr in m2) {
        if (m2.hasOwnProperty(attr)) {
            m[attr] = m2[attr];
        }
    }
    return m;
}
export function forEach(map, callback) {
    for (var prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlscy9jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QixDQUFtQixFQUFFLENBQW1CO0lBQ25FLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxHQUFHLENBQUM7SUFDUixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNuQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCx3QkFBMkIsQ0FBUTtJQUNqQyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELHNCQUF5QixDQUFNO0lBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLENBQUM7QUFFRCxzQkFBeUIsRUFBc0IsRUFBRSxFQUFzQjtJQUNyRSxJQUFJLENBQUMsR0FBdUIsRUFBRSxDQUFDO0lBRS9CLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsd0JBQThCLEdBQXVCLEVBQUUsUUFBcUM7SUFDMUYsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWwoYToge1t4OnN0cmluZ106YW55fSwgYjoge1t4OnN0cmluZ106YW55fSk6IGJvb2xlYW4ge1xuICB2YXIgazEgPSBPYmplY3Qua2V5cyhhKTtcbiAgdmFyIGsyID0gT2JqZWN0LmtleXMoYik7XG4gIGlmIChrMS5sZW5ndGggIT0gazIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBrZXk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgazEubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrMVtpXTtcbiAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuPFQ+KGE6IFRbXVtdKTogVFtdIHtcbiAgY29uc3QgdGFyZ2V0ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYVtpXS5sZW5ndGg7ICsraikge1xuICAgICAgdGFyZ2V0LnB1c2goYVtpXVtqXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdDxUPihhOiBUW10pOiBUIHwgbnVsbCB7XG4gIHJldHVybiBhLmxlbmd0aCA+IDAgPyBhWzBdIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlPFY+KG0xOiB7W2tleTogc3RyaW5nXTogVn0sIG0yOiB7W2tleTogc3RyaW5nXTogVn0pOiB7W2tleTogc3RyaW5nXTogVn0ge1xuICB2YXIgbToge1trZXk6IHN0cmluZ106IFZ9ID0ge307XG5cbiAgZm9yICh2YXIgYXR0ciBpbiBtMSkge1xuICAgIGlmIChtMS5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgbVthdHRyXSA9IG0xW2F0dHJdO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGF0dHIgaW4gbTIpIHtcbiAgICBpZiAobTIuaGFzT3duUHJvcGVydHkoYXR0cikpIHtcbiAgICAgIG1bYXR0cl0gPSBtMlthdHRyXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2g8SywgVj4obWFwOiB7W2tleTogc3RyaW5nXTogVn0sIGNhbGxiYWNrOiAvKihWLCBLKSA9PiB2b2lkKi8gRnVuY3Rpb24pOiB2b2lkIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBtYXApIHtcbiAgICBpZiAobWFwLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICBjYWxsYmFjayhtYXBbcHJvcF0sIHByb3ApO1xuICAgIH1cbiAgfVxufSJdfQ==