{{ content() }}

<h2>Az önhöz tartozó társasházak</h2>

<br />
<div align="right">
    {{ link_to(resource ~ "/create", "<i class='icon-plus-sign'></i> Ház hozzáadása", "class": "btn btn-primary create-btn ajax-btn") }}

</div>
<br />

{% for item in page.items %}
    {% if loop.first %}
    <table class="table table-hover" align="center">
        <thead>
            <tr>
                <th class="col-sm-3">Elnevezése</th>
                <th class="col-sm-3">Helyrajzi szám</th>
                <th class="col-sm-6">Műveletek</th>
            </tr>
        </thead>
    {% endif %}
    <tbody>
        <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.hrsz }}</td>
            <td class='action'>
                {{ link_to(resource ~ "/edit/" ~ item.id, 'Szerkesztés', "class": "btn btn-primary create-btn ajax-btn") }}

                {{ form('class': 'form-request ajax-delete' ,'method' : 'DELETE' , 'action' :  url(resource ~ "/" ~ item.id) ) }}
                    <input type="submit" value="Törlés" class="btn btn-danger create-btn" />
                </form>
            </td>
        </tr>
    </tbody>
    {% if loop.last %}
    </table>
    <div class="bs-component">
        <ul class="pagination">
            <li>{{ link_to("users/search", '«', "class": "btn ajax-btn") }}</li>
            <li>{{ link_to("users/search?page=" ~ page.before, '←', "class": "btn ajax-btn") }}</li>
            {% for pageNum in pageLinks %}
                {% if pageNum == page.current %}
                    <li class="active">{{ link_to("users/search?page=" ~ pageNum, pageNum, "class": "btn ajax-btn") }}</li>
                {% else %}
                    <li>{{ link_to("users/search?page=" ~ pageNum, pageNum, "class": "btn ajax-btn") }}</li>
                {% endif %}
            {% endfor %}
            <li>{{ link_to("users/search?page=" ~ page.next, '→', "class": "btn ajax-btn") }}</li>
            <li>{{ link_to("users/search?page=" ~ page.last, '»', "class": "btn ajax-btn") }}</li>
        </ul>
        <span class="help-inline page-info">{{ page.current }}. page of {{ page.total_pages }} pages</span>
    </div>
    {% endif %}
{% else %}
    Önhöz még nincs lakóház felvéve...
{% endfor %}


<script type="text/javascript">
    $(document).ready(function(){
        if($('.content > .alert').length){
            myHouses();
            console.log($('.content > div.alert').html());
        }
    });
</script>